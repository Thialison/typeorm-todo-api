import bcrypt from "bcrypt"

const makeEncrypt = (value: string): Promise<string> => bcrypt.hash(value, 10)

const compareEncrypt = (value: string, valueHashed: string): Promise<boolean> =>
  bcrypt.compare(value, valueHashed)

export { makeEncrypt, compareEncrypt }
