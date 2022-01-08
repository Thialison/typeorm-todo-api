import { Request, Response, Router } from "express"
import { check, validationResult } from "express-validator"
import { showUsersController } from "../useCases/User/ShowUsers/ShowUsersFactory"
import { createUserController } from "../useCases/User/CreateUser/CreateUserFactory"
import { deleteUserController } from "../useCases/User/DeleteUser/DeleteUserFactory"
import { checkJwt } from "../utils/auth"

const userRouter = Router()

userRouter.get("/", [checkJwt], (request: Request, response: Response) => {
  showUsersController.handle(request, response)
})

userRouter.post(
  "/",
  [
    check("username").isString().isLength({ min: 6 }).trim(),
    check("password").isLength({ min: 8 }).trim().escape(),
  ],
  (request: Request, response: Response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
      return response.status(422).json({ errors: errors.array() })
    }
    createUserController.handle(request, response)
  }
)

userRouter.delete(
  "/:username",
  [checkJwt],
  (request: Request, response: Response) => {
    deleteUserController.handle(request, response)
  }
)

export default userRouter
