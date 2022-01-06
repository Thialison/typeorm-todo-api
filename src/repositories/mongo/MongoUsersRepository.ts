import { getRepository } from "typeorm"
import { User } from "../../entities/User"
import { IUsersRepository } from "../IUsersRepository"
import { ICreateUserRequest } from "../../useCases/UsersDTO"

export class MongoUsersRepository implements IUsersRepository {
  async findAll(): Promise<User[]> {
    return await getRepository(User).find()
  }

  async findUser(username: string): Promise<User> {
    return await getRepository(User).findOne({ username })
  }

  async exists(username: string): Promise<boolean> {
    const user = await getRepository(User).findOne({ username })

    return !!user
  }

  async create(user: ICreateUserRequest): Promise<void> {
    const repository = getRepository(User)
    const { username, password } = user

    const newUser = repository.create({ username, password })

    await repository.save(newUser)
  }

  async delete(username: string): Promise<void> {
    const user = await getRepository(User).findOne({ username })

    await getRepository(User).delete(user)
  }
}
