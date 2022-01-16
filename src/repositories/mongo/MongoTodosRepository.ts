import { getRepository } from "typeorm"
import { Todo } from "../../entities/Todo"
import { ITodosRepository } from "../ITodosRepository"
import { ICreateTodoRequest } from "../../useCases/Todo/TodosDTO"

export class MongoTodosRepository implements ITodosRepository {
  async findAllFromUser(username: string): Promise<Todo[]> {
    return await getRepository(Todo).find({
      relations: ["user"],
      where: {
        "user.username": { $eq: username },
      },
    })
  }

  async findOneFromUser(id: string, username: string): Promise<Todo> {
    return await getRepository(Todo).findOne({
      where: {
        id: id,
        "user.username": { $eq: username },
      },
    })
  }

  async create(todo: ICreateTodoRequest): Promise<Todo> {
    const todoRepo = getRepository(Todo)

    const { title, description, user } = todo

    const newTodo = todoRepo.create({ title, description, user })

    await todoRepo.save(newTodo)

    return newTodo
  }

  async update(todo: ICreateTodoRequest): Promise<Todo> {
    return await getRepository(Todo).save(todo)
  }

  async delete(id: string): Promise<void> {
    const repository = getRepository(Todo)
    const todo = await repository.findOne({ id })

    await repository.delete(todo)
  }
}
