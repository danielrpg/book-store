import { Controller, Get, Param, ParseIntPipe, Post, Body, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('book')
@UseGuards(AuthGuard())
export class BookController {
    constructor(
        private bookService: BookService
    ) {}

    @Get('/getall')
    @ApiResponse({
        status: 201,
        description: 'Get all books with pagination'
    })
    @ApiBody({
        type: Number
    })
    @ApiBearerAuth()
    getAll(@Query('page') page: number): Promise<Book[]> {
        return this.bookService.getAll(page);
    }    

    @Get()
    @ApiResponse({
        status: 201,
        description: 'Get all books'
    })
    @ApiBearerAuth()
    getAllBooks(): Promise<Book[]> {
        return this.bookService.getAllBooks();
    }

    @Get('/:id')
    @ApiResponse({
        status: 201,
        description: 'Get all books by id'
    })
    @ApiBody({
        type: Number
    })
    @ApiBearerAuth()
    getBookById(@Param('id', ParseIntPipe) id: number): Promise<Book> {
        return this.bookService.getById(id);
    }

    @Post()
    @ApiBody({
        type: CreateBookDto
    })
    @ApiResponse({
        status: 201,
        description: 'Create Book Dto'
    })
    @ApiBearerAuth()
    saveBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
        return this.bookService.saveBook(createBookDto);
    }

    @Delete('/:id')
    @ApiBody({
        type: Number
    })
    @ApiBearerAuth()
    deleteBook(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.bookService.deleteBook(id)
    }
}
