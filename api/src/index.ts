import app from './app'
import sequelize from './db'
import './models/buttons'

const PORT = process.env.PORT ?? 3000

void sequelize.sync({ force: false }).then(() => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('❌ Error starting server:', error)
  }
})
