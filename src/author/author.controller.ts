import { Controller, Get, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';

@Controller('author')
export class AuthorController {
    constructor(
        private authorService: AuthorService
    ) {}

    @Get()
    getAllAuthors(): Promise<Author[]> {
        return this.authorService.getAllAuthors();
    }

    @Get('/:id')
    getAuthorById(@Param('id', ParseIntPipe) id: number): Promise<Author> {
        return this.authorService.getById(id);
    }

    @Post()
    saveAuthor(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
        return this.authorService.saveAuthor(createAuthorDto);
    }
}
