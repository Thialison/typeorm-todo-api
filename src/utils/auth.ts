import { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"
import * as jwt from "jsonwebtoken"

dotenv.config()

export const checkJwt = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) return response.status(401).send({ error: "Token not provided" })

  let verification

  try {
    verification = jwt.verify(token, process.env.SECRET_KEY)
    response.cookie("userlogged", verification.username)
  } catch (error) {
    return response.status(401).send({ error: "Invalid token" })
  }

  // Call the next middleware or controller
  next()
}

export const createToken = (username: string) => {
  return jwt.sign({ username }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  })
}
