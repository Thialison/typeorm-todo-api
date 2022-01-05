import { Router } from "express"

const healthCheckRouter = Router()

healthCheckRouter.get("/", (request, response) => {
  response.status(200).json({ message: "Hello Im Up" })
})

export default healthCheckRouter
