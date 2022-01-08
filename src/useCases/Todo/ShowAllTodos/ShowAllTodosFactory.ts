import { ShowAllTodosService } from "./ShowAllTodosService"
import { MongoTodosRepository } from "./../../../repositories/mongo/MongoTodosRepository"
import { ShowAllTodosController } from "./ShowAllTodosController"

const mongoTodoRepository = new MongoTodosRepository()

const showAllTodosService = new ShowAllTodosService(mongoTodoRepository)

const showAllTodosController = new ShowAllTodosController(showAllTodosService)

export { showAllTodosService, showAllTodosController }
