const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModel')


const getTareas = asyncHandler(async (req, res) =>{

  const tareas = await Tarea.find({user: req.user.id})

  res.status(200).json(tareas)
})

const createTareas = asyncHandler (async (req, res) =>{

    if(!req.body.texto){
      res.status(400)
      throw new Error ('Por favor teclea una descripcion')
    }

    const tarea = await Tarea.create({
      texto: req.body.texto,
      user: req.user.id
    })
      
    res.status(201).json(tarea)
  })

const updateTareas = asyncHandler(async (req, res) => {

    const tarea = await Tarea.findById(req.params.id)
    if(!tarea){
      res.status(400)
      throw new Error('Esa tarea no existe')
    }

    //verificar que la tarea pertenrzca al uduario del token

    if(tarea.user.toString() !== req.user.id) {

      res.status(401)
      throw new Error('Acceso no autorizado')

    }else {
    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(tareaUpdated)
    }
  })

const deleteTareas = asyncHandler (async (req, res) => {

  const tarea = await Tarea.findById(req.params.id)

    if(!tarea){
      res.status(400)
      throw new Error('Esa tarea no existe')
    }

    //verificar que la tarea pertenrzca al uduario del token

    if(tarea.user.toString() !== req.user.id) {

      res.status(401)
      throw new Error('Acceso no autorizado')

    }else {
      tarea.deleteOne()

      res.status(200).json({id: req.params.id})
    }
    
  })





module.exports = {
  getTareas, createTareas, updateTareas, deleteTareas
}