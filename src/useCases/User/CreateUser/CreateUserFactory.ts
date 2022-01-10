import { CreateUserController } from "./CreateUserController"
import { CreateUserService } from "./CreateUserService"
import { MongoUsersRepository } from "../../../repositories/mongo/MongoUsersRepository"

const mongoUsersRepository = new MongoUsersRepository()

const createUserService = new CreateUserService(mongoUsersRepository)

const createUserController = new CreateUserController(createUserService)

export { createUserService, createUserController }
