import { createConnection, getConnection, getConnectionOptions } from "typeorm"

export class Database {
  private mongoTestDBOptions: any

  async connection() {
    try {
      const conn = await createConnection()
      console.log(`DB Conectado ${conn.options.database}`)
    } catch (error) {
      console.log(`Database is not running ${error}`)
    }
  }

  async close() {
    await getConnection().close()
  }

  async conn() {
    await getConnection().connect()
  }

  async createTestDBConnection() {
    const options = await getConnectionOptions("test")
    this.mongoTestDBOptions = options
    this.mongoTestDBOptions.name = "default"
    await createConnection(this.mongoTestDBOptions)
  }
}
