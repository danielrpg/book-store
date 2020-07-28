import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.entity';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookRepository)
        private bookRepository: BookRepository
    ) {}

    getAllBooks(): Promise<Book[]> {
        return this.bookRepository.getAllBooks();
    }

    getById(id: number): Promise<Book> {
        return this.bookRepository.getById(id);
    }

    saveBook(createBookDto: CreateBookDto): Promise<Book> {
        return this.bookRepository.saveBook(createBookDto);
    }

    async deleteBook(id: number): Promise<void> {
        const result = await this.bookRepository.delete(id);

        if(result.affected === 0) {
            throw new NotFoundException(`Book with ID "${id}" not found`);
        }
    }
}
