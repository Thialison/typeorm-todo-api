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

describe("Update Todo", () => {
  it("Should be able to update an existent todo", async () => {
    const createdUserResponse = await request(server).post("/users").send({
      username: "thialison",
      password: "teste#282h",
    })

    const createdTodoResponse = await request(server)
      .post("/todos")
      .set("Authorization", "Bearer " + createdUserResponse.body.token)
      .send({
        title: "teste 1",
        description: "teste 1",
      })

    const response = await request(server)
      .put(`/todos/${createdTodoResponse.body.data.id}`)
      .set({ Authorization: `Bearer ${createdUserResponse.body.token}` })
      .send({
        title: "teste 2",
        description: "teste 2",
      })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("data.id")
    expect(response.body).toHaveProperty("data.title")
    expect(response.body).toHaveProperty("data.description")

    expect(response.body).toEqual({
      data: {
        id: `${createdTodoResponse.body.data.id}`,
        title: "teste 2",
        description: "teste 2",
      },
    })
  })
})
