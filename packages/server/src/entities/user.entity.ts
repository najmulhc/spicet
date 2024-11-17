import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP"
  })
  updatedAt!: string;

  @Column() // name of the user
  name!: string;

  @Column()
  createdAt!: Date; // when the user is created

  @Column() 
  avatar!: string; // avatar image

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = new Date();
  }
}
