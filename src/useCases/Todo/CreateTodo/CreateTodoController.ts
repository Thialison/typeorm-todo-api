import { Response, Request } from "express"
import { Todo } from "../../../entities/Todo"
import { CreateTodoService } from "./CreateTodoService"

export class CreateTodoController {
  private createTodoService: CreateTodoService

  constructor(createTodoService: CreateTodoService) {
    this.createTodoService = createTodoService
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body

    // Get cookies
    const ck = request.cookies
    const username = ck.userlogged

    const result = await this.createTodoService.execute({
      title,
      description,
      username,
    })

    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }

    return response.status(201).json({ data: this.parseTodoResponse(result) })
  }

  private parseTodoResponse = ({ id, title, description }: Todo) => {
    return { id, title, description }
  }
}
