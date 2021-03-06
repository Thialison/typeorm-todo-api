import createServer from "./server"
import { Database } from "./utils/database"

const app = createServer()
const port = 3000

const server = app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`)
  await new Database().connection()
})

process.on("SIGINT", async () => {
  server.close()
  console.log("App Desconectado")

  await new Database().close().then(() => {
    console.log("DB Desconectado")
  })
})
