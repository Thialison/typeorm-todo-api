import { Request, Response } from "express"
import { ShowAllTodosService } from "./ShowAllTodosService"

export class ShowAllTodosController {
  private showAllTodosService: ShowAllTodosService

  constructor(showAllTodosService: ShowAllTodosService) {
    this.showAllTodosService = showAllTodosService
  }

  async handle(request: Request, response: Response): Promise<Response> {
    // Get cookies
    const ck = request.cookies
    const username = ck.userlogged

    console.log(username)

    const result = await this.showAllTodosService.execute(username)

    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }

    return response.status(201).json({ data: result })
  }
}
