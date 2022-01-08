import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinTable,
} from "typeorm"
import { Todo } from "./Todo"

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID

  @Column({ unique: true })
  username: string

  @Column()
  password: string

  @OneToMany(() => Todo, (todo) => todo.user)
  @JoinTable()
  todos: Todo[]

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updated_at: Date
}
