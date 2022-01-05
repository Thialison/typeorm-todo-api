import { IUsersRepository } from "../../repositories/IUsersRepository"
import { makeEncrypt } from "../../utils/encrypt"
import { ICreateUserRequest } from "../UsersDTO"

export class CreateUserService {
  private userRepository: IUsersRepository

  constructor(repository: IUsersRepository) {
    this.userRepository = repository
  }

  async execute({
    username,
    password,
  }: ICreateUserRequest): Promise<void | Error> {
    if (await this.userRepository.exists(username)) {
      return new Error("Username already exists")
    }

    password = await makeEncrypt(password)

    const user = await this.userRepository.create({ username, password })

    return user
  }
}
