import { IUsersRepository } from "../../../repositories/IUsersRepository"
import { createToken } from "../../../utils/auth"
import { makeEncrypt } from "../../../utils/encrypt"
import { ICreateUserRequest } from "../UsersDTO"

export class CreateUserService {
  private userRepository: IUsersRepository

  constructor(repository: IUsersRepository) {
    this.userRepository = repository
  }

  async execute({
    username,
    password,
  }: ICreateUserRequest): Promise<string | Error> {
    if (await this.userRepository.exists(username)) {
      return new Error("Username already exists")
    }

    password = await makeEncrypt(password)

    await this.userRepository.create({ username, password })

    return createToken(username)
  }
}
