import { createConnection, getConnection } from "typeorm"

export class Database {
  async connection() {
    try {
      const conn = await createConnection()
      console.log(`DB Conectado ${conn.options.database}`)
    } catch (error) {
      console.log(`Database is not running ${error}`)
    }

    process.on("SIGINT", () => {
      this.close().then(() => {
        console.log("DB Desconectado")
      })
    })
  }

  async close() {
    await getConnection().close()
  }

  async conn() {
    await getConnection().connect()
  }
}
