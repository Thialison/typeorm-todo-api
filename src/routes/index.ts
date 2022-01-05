import { Router } from "express"

import healthCheckRouter from "./healthCheck"
import userRouter from "./userRoutes"

const router = Router()

router.use("/", healthCheckRouter)
router.use("/users", userRouter)

export default router
