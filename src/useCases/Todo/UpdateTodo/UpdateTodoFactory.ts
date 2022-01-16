import { UpdateTodoController } from "./UpdateTodoController"
import { UpdateTodoService } from "./UpdateTodoService"
import { MongoTodosRepository } from "../../../repositories/mongo/MongoTodosRepository"

const mongoTodoRepository = new MongoTodosRepository()

const updateTodoService = new UpdateTodoService(mongoTodoRepository)

const updateTodoController = new UpdateTodoController(updateTodoService)

export { updateTodoService, updateTodoController }
