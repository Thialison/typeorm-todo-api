import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinTable,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
} from "typeorm"
import { User } from "./User"
import { v4 as uuid } from "uuid"

@Entity()
export class Todo {
  constructor(id?: string) {
    this.id = uuid()
  }

  @ObjectIdColumn({ name: "_id" })
  _id: string

  @PrimaryGeneratedColumn()
  id: string

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
