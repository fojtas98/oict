import { type Handler } from 'express'

const auth: Handler = (req, res, next) => {
  const token = req.header('X-API-KEY')
  if (!token) {
    return res.status(401).send('Missing X-API-KEY header')
  }

  if (process.env.API_KEY !== token) {
    return res.status(401).send('token is not valid')
  }
  next()
}
export default auth
