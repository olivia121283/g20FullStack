const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')


const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body 
  
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Faltan datos')
  }
 // verificar asi el usuario existe
  const userExists = await User.findOne({email})
  if(userExists){
    res.status(400)
    throw new Error('Ese usuario ya existe, favor de verificar')
  }
  // hash al password
  const salt = await bcrypt.genSalt(10)
  const hashedPasword = await bcrypt.hash(password, salt)

//crear el usuario
const user = await User.create({
  name,
  email,
  password: hashedPasword
})
//si se pudo crear el usuario lo muestro en la respuesta
// en caso contrario lanza un error
if(user){
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email
  })
}else{
  res.status(400)
  throw new Error('No se pudo crear el usuario')
}
})

const loginUser = asyncHandler( async (req, res) =>{

    const{email, password} = req.body

    // verificamos que el usuario exista
    const user = await User.findOne({email})

    if(user && (await  bcrypt.compare(password, user.password))){
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      })
    }else{
      res.status(400)
      throw new Error('Credenciales incorrectas')
    }
})

const getUsersData = asyncHandler( async (req, res) =>{
  res.json(req.user)
})

const generateToken = (id) =>{
  return jwt.sign({id},process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}


module.exports = {
  registerUser, loginUser, getUsersData
}