import { Todo } from "../entities/Todo"
import { ICreateTodoRequest } from "../useCases/Todo/TodosDTO"

export interface ITodosRepository {
  findAllFromUser(username: string): Promise<Todo[]>
  findOneFromUser(id: string, username: string): Promise<Todo>
  create(todo: ICreateTodoRequest): Promise<Todo>
  delete(id: string): Promise<void>
  update(todo: ICreateTodoRequest): Promise<Todo>
}
