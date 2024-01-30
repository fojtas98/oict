import { Handler } from 'express'
import getDataFromLitackaApi from '../../utils/getDataFromLitackaApi'

const getStatus: Handler = async (req, res) => {
  if (Object.keys(req.query).length === 0) {
    return res.status(400).send('Missing query parameters')
  }
  const cardNumber = req.query.cardNumber
  if (typeof cardNumber !== 'string') {
    return res.status(400).send('Invalid cardNumber parameter')
  }
  try {
    const response = await getDataFromLitackaApi(cardNumber)
    res.json(response)
  } catch (err) {
    return res.status(500).send('Internal error')
  }
}
export default getStatus
