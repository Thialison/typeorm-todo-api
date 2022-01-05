import { getRepository } from "typeorm"
import { User } from "../../entities/User"
import { IUsersRepository } from "../IUsersRepository"
import { ICreateUserRequest } from "../../useCases/UsersDTO"

export class MongoUsersRepository implements IUsersRepository {
  async findAll(): Promise<User[]> {
    const repository = getRepository(User)
    return await repository.find()
  }

  async exists(username: string): Promise<boolean> {
    const repository = getRepository(User)
    const user = await repository.findOne({ username })

    return !!user
  }

  async create(user: ICreateUserRequest): Promise<void> {
    const repository = getRepository(User)
    const { username, password } = user

    const newUser = repository.create({ username, password })

    await repository.save(newUser)
  }
}
