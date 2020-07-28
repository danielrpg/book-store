import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Cart } from "src/cart/cart.entity";
import { Book } from "src/book/book.entity";

@Entity()
export class BookCart extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ type: 'decimal' })
    quantity: number;

    @ManyToOne(type => Cart, cart => cart.bookCart)
    public cart!: Cart;

    @ManyToOne(type => Book, book => book.bookCart)
    public book!: Book;
}