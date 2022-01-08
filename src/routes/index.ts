import { Router } from "express"

import healthCheckRouter from "./healthCheckRouter"
import userRouter from "./userRouter"
import LoginRouter from "./loginRouter"
import todoRouter from "./todoRouter"

const router = Router()

router.use("/", healthCheckRouter)
router.use("/users", userRouter)
router.use("/login", LoginRouter)
router.use("/todos", todoRouter)

export default router
