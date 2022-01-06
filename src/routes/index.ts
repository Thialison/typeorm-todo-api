import { Router } from "express"

import healthCheckRouter from "./healthCheckRouter"
import userRouter from "./userRouter"
import LoginRouter from "./loginRouter"

const router = Router()

router.use("/", healthCheckRouter)
router.use("/users", userRouter)
router.use("/login", LoginRouter)

export default router
