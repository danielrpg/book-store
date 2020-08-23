import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Author } from "../author/author.entity";
import { BookCart } from "../book-cart/book-cart.entity";

@Entity()
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ type: 'decimal' })
    price: number;

    @Column()
    imageUrl: string;

    @ManyToOne(type => Author, author => author.books, { eager: false })
    author: Author;

    @OneToMany(type => BookCart, bookCart => bookCart.book)
    public bookCart!: BookCart[];
}