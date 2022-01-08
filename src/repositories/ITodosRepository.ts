import { Todo } from "../entities/Todo"
import { ICreateTodoRequest } from "../useCases/Todo/TodosDTO"

export interface ITodosRepository {
  findAll(): Promise<Todo[]>
  create(todo: ICreateTodoRequest): Promise<Todo>
  delete(id: string): Promise<void>
}
