import { Handler } from "express"

const healthCheck: Handler = (_, res) => res.status(200).send("OK")

export default healthCheck