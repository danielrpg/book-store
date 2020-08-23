import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.entity';
import { AuthorRepository } from '../author/author.repository';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookRepository)
        private bookRepository: BookRepository,
        @InjectRepository(AuthorRepository)
        private authorRepository: AuthorRepository
    ) {}

    getAll(page: number = 1): Promise<Book[]> {
        return this.bookRepository.find({
            relations: ['author'],
            take: 10,
            skip: 10 * (page - 1),
        });
    }

    getAllBooks(): Promise<Book[]> {
        return this.bookRepository.getAllBooks();
    }

    getById(id: number): Promise<Book> {
        return this.bookRepository.getById(id);
    }

    async saveBook(createBookDto: CreateBookDto): Promise<Book> {
        const authorDb = await this.authorRepository.findOne(createBookDto.authorId);
        return await this.bookRepository.saveBook(createBookDto, authorDb);
    }

    async deleteBook(id: number): Promise<void> {
        const result = await this.bookRepository.delete(id);

        if(result.affected === 0) {
            throw new NotFoundException(`Book with ID "${id}" not found`);
        }
    }
}
