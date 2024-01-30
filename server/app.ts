import express from "express"
import cors from "cors"
import auth from "./auth"
import getStatus from "./routes/getStatus"
import healthCheck from "./routes/healthCheck"
import swaggerUi from "swagger-ui-express"
import docs from "./routes/docs"
const app = express()

app.disable('x-powered-by')
app.use(cors({ origin: '*' }))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(docs));
app.get('/health-check', healthCheck)
app.use(auth)
app.get('/status', getStatus)

export default app