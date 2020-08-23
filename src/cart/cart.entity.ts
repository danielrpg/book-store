import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { BookCart } from "../book-cart/book-cart.entity";

@Entity()
export class Cart extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nit: string;

    @Column()
    name: string;

    @OneToMany(type => BookCart, bookCart => bookCart.cart)
    public bookCart!: BookCart[];
}