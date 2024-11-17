import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Cuisine {
    @PrimaryGeneratedColumn("uuid") 
    id!: string

    @Column()
    name!: string

    @Column()
    icon!: string // icon of the cuisine type
}