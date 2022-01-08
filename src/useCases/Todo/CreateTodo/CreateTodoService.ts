import { Todo } from "../../../entities/Todo"
import { ITodosRepository } from "../../../repositories/ITodosRepository"
import { IUsersRepository } from "../../../repositories/IUsersRepository"
import { ICreateTodoRequest } from "../TodosDTO"

export class CreateTodoService {
  private todoRepository: ITodosRepository
  private userRepository: IUsersRepository

  constructor(todoRepo: ITodosRepository, userRepo: IUsersRepository) {
    this.todoRepository = todoRepo
    this.userRepository = userRepo
  }

  async execute({
    title,
    description,
    username,
  }: ICreateTodoRequest): Promise<Todo | Error> {
    const user = await this.userRepository.findUser(username)

    return await this.todoRepository.create({
      title,
      description,
      user,
    })
  }
}
