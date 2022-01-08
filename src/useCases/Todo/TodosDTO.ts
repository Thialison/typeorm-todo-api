import { User } from "./../../entities/User"

export interface ICreateTodoRequest {
  id?: string
  title: string
  description?: string
  username?: string
  user?: User
}
