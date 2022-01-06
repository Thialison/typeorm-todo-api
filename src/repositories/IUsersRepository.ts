import { User } from "../entities/User"
import { ICreateUserRequest } from "../useCases/UsersDTO"

export interface IUsersRepository {
  exists(username: string): Promise<boolean>
  findAll(): Promise<User[]>
  create(user: ICreateUserRequest): Promise<void>
  delete(username: string): Promise<void>
  findUser(username: string): Promise<User>
}
