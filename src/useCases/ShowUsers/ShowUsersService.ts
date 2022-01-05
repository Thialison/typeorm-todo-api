import { User } from "../../entities/User"
import { IUsersRepository } from "../../repositories/IUsersRepository"

export class ShowUsersService {
  private usersRepository: IUsersRepository

  constructor(repository: IUsersRepository) {
    this.usersRepository = repository
  }

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.findAll()

    const usersWithoutPassword = users.map((user) => {
      delete user.password
      return user
    })

    return usersWithoutPassword
  }
}
