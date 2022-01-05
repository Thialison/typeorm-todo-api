import { Request, Response, Router } from "express"
import { check, validationResult } from "express-validator"
import { showUsersController } from "../useCases/ShowUsers/ShowUsersFactory"
import { createUserController } from "../useCases/CreateUser/CreateUserFactory"
// import { check, validationResult } from "express-validator"

const userRouter = Router()

userRouter.get("/", (request: Request, response: Response) => {
  showUsersController.handle(request, response)
})

userRouter.post(
  "/",
  [
    check("username").isString().isLength({ min: 6 }).trim(),
    check("password").isLength({ min: 8 }).trim().escape(),
  ],
  (resquest: Request, response: Response) => {
    const errors = validationResult(resquest)
    if (!errors.isEmpty()) {
      return response.status(422).json({ errors: errors.array() })
    }
    createUserController.handle(resquest, response)
  }
)

export default userRouter
