import { DeleteUserController } from "./DeleteUserController"
import { DeleteUserService } from "./DeleteUserService"
import { MongoUsersRepository } from "../../../repositories/mongo/mongoUsersRepository"

const mongoUsersRepository = new MongoUsersRepository()

const deleteUserService = new DeleteUserService(mongoUsersRepository)

const deleteUserController = new DeleteUserController(deleteUserService)

export { deleteUserService, deleteUserController }
