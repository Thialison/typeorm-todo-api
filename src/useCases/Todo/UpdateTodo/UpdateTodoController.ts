import { Response, Request } from "express"
import { Todo } from "../../../entities/Todo"
import { UpdateTodoService } from "./UpdateTodoService"

export class UpdateTodoController {
  private updateTodoService: UpdateTodoService

  constructor(updateTodoService: UpdateTodoService) {
    this.updateTodoService = updateTodoService
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body
    const { id } = request.params

    // Get cookies
    const ck = request.cookies
    const username = ck.userlogged

    const todo = await this.updateTodoService.execute(
      id,
      title,
      description,
      username
    )

    if (todo instanceof Error) {
      return response.status(404).json({ message: todo.message })
    }

    return response
      .status(200)
      .send({ data: this.parseUpdateTodoResponse(todo) })
  }

  private parseUpdateTodoResponse = ({ id, title, description }: Todo) => {
    return { id, title, description }
  }
}
