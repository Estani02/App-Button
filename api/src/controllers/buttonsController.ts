import { Request, Response } from 'express'
import Button from '../models/buttons'

// Obtener todos los botones
export const getAllButtons = async (_req: Request, res: Response) => {
  try {
    const buttons = await Button.findAll()
    res.json(buttons)
  } catch (error) {
    res.status(500).json({ error: 'Failed to get the buttons.' })
  }
}

// Crear un nuevo botón
export const createButton = async (req: Request, res: Response) => {
  const { name } = req.body

  if (!name) {
    res.status(400).json({ error: 'You must provide a name for the button.' })
    return
  }

  try {
    const button = await Button.create({ name })
    res.json(button)
  } catch (error) {
    res.status(500).json({ error: 'Error creating the button.' })
  }
}

// Registrar clic en un botón
export const registerClick = async (req: Request, res: Response) => {
  const buttonId = req.params.id

  try {
    const button = await Button.findByPk(buttonId)
    if (button == null) {
      res.status(404).json({ error: 'The button does not exist.' })
      return
    }

    button.clicks++
    await button.save()

    res.json(button)
  } catch (error) {
    res.status(500).json({ error: 'Failed to register click.' })
  }
}

// Eliminar un botón
export const deleteButton = async (req: Request, res: Response) => {
  const buttonId = req.params.id

  try {
    const button = await Button.findByPk(buttonId)
    if (button == null) {
      res.status(404).json({ error: 'The button does not exist.' })
      return
    }

    await button.destroy()

    res.json({ message: 'Button successfully removed.' })
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the button.' })
  }
}
