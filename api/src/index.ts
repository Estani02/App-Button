import sequelize from 'sequelize'
import app from './app'
import './models/buttons'

const PORT = process.env.PORT ?? 3000

const initialzeServer = async () => {
  try {
    await sequelize
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('❌ Error starting server:', error)
  }
}

void initialzeServer()
