import { type Handler } from 'express'

const auth: Handler = (req, res, next) => {
  const authHeader = req.header('Authorization')
  if (!authHeader) {
    return res.status(401).send('Missing Authorization header')
  }
  const token = authHeader.split(' ')[1]
  if (!token) {
    return res.status(401).send('Missing token')
  }
  if (process.env.API_KEY !== token) {
    return res.status(401).send('token is not valid')
  }
  next()
}
export default auth
