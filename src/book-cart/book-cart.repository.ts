import { Repository, EntityRepository } from "typeorm";
import { BookCart } from "./book-cart.entity";

@EntityRepository(BookCart)
export class BookCartRepository extends Repository<BookCart> {}