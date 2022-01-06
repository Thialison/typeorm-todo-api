import { Request, Response } from "express"
import { ShowUsersService } from "./ShowUsersService"

export class ShowUsersController {
  private showUsersService: ShowUsersService

  constructor(showUsersService: ShowUsersService) {
    this.showUsersService = showUsersService
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const result = await this.showUsersService.execute()

    if (result instanceof Error) {
      return res.status(404).send({ message: result.message })
    }

    return res.status(201).send({ data: result })
  }
}
