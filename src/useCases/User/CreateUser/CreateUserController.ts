import { Response, Request } from "express"
import { CreateUserService } from "./CreateUserService"

export class CreateUserController {
  private createUserService: CreateUserService

  constructor(createUserService: CreateUserService) {
    this.createUserService = createUserService
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body

    const isUsernameCaptalized = username !== username.toLowerCase()

    if (isUsernameCaptalized) {
      return response
        .status(404)
        .json({ messag: "Username must be in lowercase" })
    }

    const result = await this.createUserService.execute({ username, password })

    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }

    return response.status(201).json({ token: result })
  }
}
