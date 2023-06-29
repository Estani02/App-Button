import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/', (req, res) => {
  res.send('Hello World')
})

export default app
