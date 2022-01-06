import { Response, Request } from "express"
import { DeleteUserService } from "./DeleteUserService"

export class DeleteUserController {
  private deleteUserService: DeleteUserService

  constructor(deleteUserService: DeleteUserService) {
    this.deleteUserService = deleteUserService
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { username } = request.params

    const result = await this.deleteUserService.execute(username)

    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }

    return response.status(201).json({ sucess: "User Deleted" })
  }
}
