import { Controller, Get, Param, ParseIntPipe, Post, Body, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
    constructor(
        private bookService: BookService
    ) {}

    @Get()
    getAllBooks(): Promise<Book[]> {
        return this.bookService.getAllBooks();
    }

    @Get('/:id')
    getBookById(@Param('id', ParseIntPipe) id: number): Promise<Book> {
        return this.bookService.getById(id);
    }

    @Post()
    saveBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
        return this.bookService.saveBook(createBookDto);
    }

    @Delete('/:id')
    deleteBook(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.bookService.deleteBook(id)
    }
}
