import { CreateTodoController } from "./CreateTodoController"
import { CreateTodoService } from "./CreateTodoService"
import { MongoTodosRepository } from "../../../repositories/mongo/mongoTodosRepository"
import { MongoUsersRepository } from "../../../repositories/mongo/mongoUsersRepository"

const mongoTodoRepository = new MongoTodosRepository()
const mongoUserRepository = new MongoUsersRepository()

const createTodoService = new CreateTodoService(
  mongoTodoRepository,
  mongoUserRepository
)

const createTodoController = new CreateTodoController(createTodoService)

export { createTodoService, createTodoController }
