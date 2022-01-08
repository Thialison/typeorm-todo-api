import { Request, Response, Router } from "express"
import { check, validationResult } from "express-validator"
import { createTodoController } from "../useCases/Todo/CreateTodo/CreateTodoFactory"
import { checkJwt } from "../utils/auth"

const todoRouter = Router()

todoRouter.get("/", [checkJwt], (request: Request, response: Response) => {
  response.status(200).send({ message: "All todos" })
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

// userRouter.delete(
//   "/:username",
//   [checkJwt],
//   (request: Request, response: Response) => {
//     deleteUserController.handle(request, response)
//   }
// )

export default todoRouter
