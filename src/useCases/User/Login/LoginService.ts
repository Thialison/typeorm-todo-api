import { IUsersRepository } from "../../../repositories/IUsersRepository"
import { compareEncrypt } from "../../../utils/encrypt"
import { ICreateUserRequest } from "../UsersDTO"
import { createToken } from "../../../utils/auth"

export class LoginService {
  private userRepository: IUsersRepository

  constructor(repository: IUsersRepository) {
    this.userRepository = repository
  }

  async execute({
    username,
    password,
  }: ICreateUserRequest): Promise<string | Error> {
    const user = await this.userRepository.findUser(username)

    if (!user) {
      return new Error("Error on Login - Username")
    }

    const result = await compareEncrypt(password, user.password)

    if (!result) {
      return new Error("Error on Login - Password")
    }

    return createToken(username)
  }
}
