import { Handler } from "express"

/**
 * @swagger
 * /health-check:
 *   get:
 *     summary: Health Check
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           text/plain:
 *             example: "OK"
 */
const healthCheck: Handler = (_, res) => res.status(200).send("OK")

export default healthCheck