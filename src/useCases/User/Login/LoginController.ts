import { Response, Request } from "express"
import { LoginService } from "./LoginService"

export class LoginController {
  private loginService: LoginService

  constructor(loginService: LoginService) {
    this.loginService = loginService
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body

    const token = await this.loginService.execute({ username, password })

    if (token instanceof Error) {
      return response.status(404).json(token.message)
    }

    return response.status(201).json({ sucess: token })
  }
}
