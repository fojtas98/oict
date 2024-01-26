import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import auth from './auth'
import getStatus from './routes/getStatus'

const app = express()

dotenv.config()

app.disable('x-powered-by')
app.use(cors({ origin: '*' }))

app.get('/health-check', (_, res) => res.status(200).send('OK'))

app.use(auth)
app.get('/status', getStatus)

app.listen(process.env.PORT)
