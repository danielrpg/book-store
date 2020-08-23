import { EntityRepository, Repository } from "typeorm";
import { Book } from './book.entity';
import { CreateBookDto } from "./dto/create-book.dto";
import { Author } from "../author/author.entity";

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {

    async getAllBooks(): Promise<Book[]> {
        const query = this.createQueryBuilder('book');
        const books = await query.getMany();
        return books;
    }

    async getById(id: number): Promise<Book> {
        return await this.findOne(id);
    }

    async saveBook(createBookDto: CreateBookDto, author: Author): Promise<Book> {
        const { title, description, price, imageUrl} = createBookDto;

        const book = new Book();
        book.title = title;
        book.description = description;
        book.price = price;
        book.imageUrl = imageUrl;
        book.author = author;

        await this.save(book);

        return book;
    }
}