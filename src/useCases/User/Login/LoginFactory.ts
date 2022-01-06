import { LoginController } from "./LoginController"
import { LoginService } from "./LoginService"
import { MongoUsersRepository } from "../../../repositories/mongo/mongoUsersRepository"

const mongoUsersRepository = new MongoUsersRepository()

const loginService = new LoginService(mongoUsersRepository)

const loginController = new LoginController(loginService)

export { loginService, loginController }
