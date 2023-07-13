const express = require('express')
const router = express.Router()
const {getTareas, createTareas,updateTareas, deleteTareas} = require('../controllers/tareaControllers.js')
const { protect } = require ('../middleware/authMiddleware.js')

router.route('/').get(protect, getTareas).post(protect, createTareas)
//router.get('/', getTareas)
//router.post('/', createTareas )

router.route('/:id').delete(protect, deleteTareas).put(protect, updateTareas)
//router.put('/:id', updateTareas )
//router.delete('/:id', deleteTareas)





module.exports = router