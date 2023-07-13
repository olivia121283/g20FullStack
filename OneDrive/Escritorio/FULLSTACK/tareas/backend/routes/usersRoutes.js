const express = require('express')
const router = express.Router()
const {registerUser, loginUser,getUsersData} = require('../controllers/usersControllers')
const { protect } = require ('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/getMe', protect, getUsersData)


module.exports = router