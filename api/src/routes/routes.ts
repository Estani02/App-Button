import express from 'express'
import { getAllButtons, createButton, registerClick, deleteButton } from '../controllers/buttonsController'

const router = express.Router()

// Rutas de los botones
router.get('/buttons', getAllButtons)
router.post('/buttons', createButton)
router.post('/buttons/:id/clicks', registerClick)
router.delete('/buttons/:id', deleteButton)

export default router
