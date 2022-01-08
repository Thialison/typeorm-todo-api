import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinTable,
} from "typeorm"
import { User } from "./User"

@Entity()
export class Todo {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  title: string

  @Column({
    default: () => "",
  })
  description: string

  @ManyToOne(() => User, (user) => user.todos)
  @JoinTable()
  user: User

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
