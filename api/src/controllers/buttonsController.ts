/* eslint-disable eqeqeq */
import { Request, Response } from 'express'
import Button from '../models/buttons'

// Obtener todos los botones
export const getAllButtons = async (_req: Request, res: Response) => {
  try {
    const buttons = await Button.findAll()
    // buttons se ordene por id de forma descendente
    const orderButtons = buttons.sort((a, b) => b.id - a.id)
    res.json(orderButtons)
  } catch (error) {
    res.status(500).json({ error: 'Failed to get the buttons.' })
  }
}

// Crear un nuevo botón
export const createButton = async (req: Request, res: Response) => {
  const {
    name,
    colorDefault,
    colorHover,
    colorText,
    size,
    text,
    icon
  } = req.body

  if (!name) {
    res.status(400).json({ error: 'El nombre es requrido.' })
    return
  }

  if (!colorDefault) {
    res.status(400).json({ error: 'El color por defecto es requrido.' })
    return
  }

  if (!colorHover) {
    res.status(400).json({ error: 'El color hover es requrido.' })
    return
  }

  if (!colorText) {
    res.status(400).json({ error: 'El color del texto es requrido.' })
    return
  }

  if (!size) {
    res.status(400).json({ error: 'El tamaño es requrido.' })
    return
  }

  if (!text) {
    res.status(400).json({ error: 'El texto es requrido.' })
    return
  }

  if (size != 'sm' && size != 'md' && size != 'lg') {
    res.status(400).json({ error: 'El tamaño debe ser sm, md o lg.' })
    return
  }

  // si se evia icon por body se valida que tiene que ser una dirección de imagen
  if (icon) {
    const regex = /^(http|https):\/\//i
    if (!regex.test(icon)) {
      res.status(400).json({ error: 'El icono debe ser una URL de imagen válida.' })
      return
    }
  }

  try {
    const button = await Button.create({ name, colorDefault, colorHover, colorText, size, text, icon })
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
