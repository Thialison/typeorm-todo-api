import { CreateTodoController } from "./CreateTodoController"
import { CreateTodoService } from "./CreateTodoService"
import { MongoTodosRepository } from "../../../repositories/mongo/MongoTodosRepository"
import { MongoUsersRepository } from "../../../repositories/mongo/MongoUsersRepository"

const mongoTodoRepository = new MongoTodosRepository()
const mongoUserRepository = new MongoUsersRepository()

const createTodoService = new CreateTodoService(
  mongoTodoRepository,
  mongoUserRepository
)

const createTodoController = new CreateTodoController(createTodoService)

export { createTodoService, createTodoController }
