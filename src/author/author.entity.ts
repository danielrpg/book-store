import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Book } from "../book/book.entity";

@Entity()
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    nacionality: string;

    @Column({nullable: true})
    birthdate: string;

    @OneToMany(type => Book, book => book.author, { eager: true })
    books: Book[];
}