import { Todo } from "../../../entities/Todo"
import { ITodosRepository } from "../../../repositories/ITodosRepository"

export class UpdateTodoService {
  private todoRepository: ITodosRepository

  constructor(todoRepo: ITodosRepository) {
    this.todoRepository = todoRepo
  }

  async execute(
    todoID: any,
    title: any,
    description: any,
    username: any
  ): Promise<Todo | Error> {
    const todo = await this.todoRepository.findOneFromUser(todoID, username)

    if (!todo) {
      return new Error("Todo does not exist")
    }

    todo.title = title
    todo.description = description

    const updatedTodo = await this.todoRepository.update(todo)

    return updatedTodo
  }
}
