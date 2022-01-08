import { Todo } from "../../../entities/Todo"
import { ITodosRepository } from "./../../../repositories/ITodosRepository"

export class ShowAllTodosService {
  private todoRepository: ITodosRepository

  constructor(todosRepository: ITodosRepository) {
    this.todoRepository = todosRepository
  }

  async execute(username: string): Promise<Todo[]> {
    const todos = await this.todoRepository.findAllFromUser(username)

    console.log(todos)

    return todos
  }
}
