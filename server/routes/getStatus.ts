import { Handler } from 'express'
import getDataFromLitackaApi from '../../utils/getDataFromLitackaApi'



/**
 * @openapi
 * /status:
 *   get:
 *     summary: Get status information
 *     parameters:
 *       - name: x-api-key
 *         in: header
 *         required: true
 *         schema:
 *           type: string
 *       - name: cardNumber
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               state: "Aktivní v držení klienta"
 *               validationEnds: "08.12.2020"
 *       "400":
 *         description: Bad Request
 *         content:
 *           text/plain:
 *             examples:
 *               Query parameters not defined:
 *                 value: "Missing query parameters"
 *               Invalid cardNumber:
 *                 value: "Invalid cardNumber parameter"
 *       "401":
 *         description: Unauthorized
 *         content:
 *           text/plain:
 *             examples:
 *               Missing api key:
 *                 value: "Missing X-API-KEY header"
 *               Invalid token: 
 *                 value: "Token is not valid"
 *       "500":
 *          description: Internal error
 *          content:
 *            text/plain:
 *              example: "Internal error"
 */
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
