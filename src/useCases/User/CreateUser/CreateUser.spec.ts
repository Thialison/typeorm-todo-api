import createServer from "../../../server"
import request from "supertest"
import { Database } from "../../../utils/database"

const server = createServer()

beforeAll(async () => {
  await new Database().createTestDBConnection()
})

afterAll(async () => {
  await new Database().close()
})

describe("Create User", () => {
  it("Should be able to create a new user", async () => {
    const response = await request(server).post("/users").send({
      username: "thialison",
      password: "teste#282h",
    })

    expect(response.body).toHaveProperty("token")
    expect(response.status).toBe(201)
  })

  it("Should not be able to create a new user without password", async () => {
    const response = await request(server).post("/users").send({
      username: "thialison",
    })

    expect(response.body).toHaveProperty("errors")
    expect(response.body.errors[0].msg).toEqual("Invalid value")
    expect(response.body).toEqual({
      errors: [{ location: "body", msg: "Invalid value", param: "password" }],
    })
    expect(response.status).toBe(422)
  })

  it("Should not be able to create a new user without username", async () => {
    const response = await request(server).post("/users").send({
      password: "newPassword@01",
    })

    expect(response.body).toHaveProperty("errors")
    expect(response.body.errors[0].param).toEqual("username")
    expect(response.status).toBe(422)
  })

  it("Should not be able to create a new user with the same username", async () => {
    await request(server).post("/users").send({
      username: "test-integration-user-exist",
      password: "teste#282h",
    })

    const response = await request(server).post("/users").send({
      username: "test-integration-user-exist",
      password: "newPassword@01",
    })

    expect(response.body).toBe("Username already exists")
    expect(response.status).toBe(404)
  })
})
