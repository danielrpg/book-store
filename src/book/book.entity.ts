import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Author } from "src/author/author.entity";
import { BookCart } from "src/book-cart/book-cart.entity";

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

    @ManyToOne(type => Author, author => author.books, { eager: false })
    author: Author;

    @OneToMany(type => BookCart, bookCart => bookCart.book)
    public bookCart!: BookCart[];
}