import "reflect-metadata"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import router from "./routes/index"
import helmet from "helmet"

const createServer = () => {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.use(helmet())
  app.use(router)
  app.use(cors())
  app.use(express.json())

  return app
}

export default createServer
