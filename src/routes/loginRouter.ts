import { Request, Response, Router } from "express"
import { loginController } from "../useCases/Login/LoginFactory"

const LoginRouter = Router()

LoginRouter.post("/", (request: Request, response: Response) => {
  loginController.handle(request, response)
})

export default LoginRouter
