import { IUsersRepository } from "../../repositories/IUsersRepository"

export class DeleteUserService {
  private userRepository: IUsersRepository

  constructor(repository: IUsersRepository) {
    this.userRepository = repository
  }

  async execute(username: string): Promise<void | Error> {
    await this.userRepository.delete(username)
  }
}
