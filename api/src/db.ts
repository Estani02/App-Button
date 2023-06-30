import { Sequelize } from 'sequelize'

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(DB_NAME as string, DB_USER as string, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false
})

sequelize
  .authenticate()
  .then(() => {
    console.log('✅ DB connection established successfully.')
  })
  .catch((err: Error) => {
    console.error('❌ Could not connect to DB:', err)
  })

export default sequelize
