import { ShowUsersService } from "./ShowUsersService"
import { MongoUsersRepository } from "../../repositories/mongo/mongoUsersRepository"
import { ShowUsersController } from "./ShowUsersController"

const mongoUsersRepository = new MongoUsersRepository()

const showUsersService = new ShowUsersService(mongoUsersRepository)

const showUsersController = new ShowUsersController(showUsersService)

export { showUsersService, showUsersController }
