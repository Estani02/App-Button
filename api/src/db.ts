import { Sequelize } from 'sequelize'
import { seedButtons } from './seeders'

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(DB_NAME as string, DB_USER as string, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false
})

const initialDB = async () => {
  try {
    await sequelize.sync({ force: true })
    await seedButtons()
    await sequelize.authenticate()
    console.log('✅ DB connection established successfully.')
    console.log('✅ DB synced successfully.')
  } catch (error) {
    console.error('❌ Error connecting to DB:', error)
  }
}

void initialDB()

export default sequelize
