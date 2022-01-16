import { Request, Response, Router } from "express"
import { check, validationResult } from "express-validator"
import { createTodoController } from "../useCases/Todo/CreateTodo/CreateTodoFactory"
import { showAllTodosController } from "../useCases/Todo/ShowAllTodos/ShowAllTodosFactory"
import { updateTodoController } from "../useCases/Todo/UpdateTodo/UpdateTodoFactory"
import { checkJwt } from "../utils/auth"

const todoRouter = Router()

todoRouter.get("/", [checkJwt], (request: Request, response: Response) => {
  showAllTodosController.handle(request, response)
})

todoRouter.post(
  "/",
  [check("title").isString().isLength({ min: 6 }).trim()],
  [checkJwt],
  (request: Request, response: Response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
      return response.status(422).json({ errors: errors.array() })
    }
    createTodoController.handle(request, response)
  }
)

todoRouter.put(
  "/:id",
  [check("title").isString().isLength({ min: 6 }).trim()],
  [check("description").exists()],
  [checkJwt],
  (request: Request, response: Response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
      return response.status(422).json({ errors: errors.array() })
    }
    updateTodoController.handle(request, response)
  }
)

export default todoRouter
