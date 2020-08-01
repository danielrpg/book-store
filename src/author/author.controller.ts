import { Controller, Get, Param, ParseIntPipe, Post, Body, UseGuards } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('author')
@UseGuards(AuthGuard())
export class AuthorController {
    constructor(
        private authorService: AuthorService
    ) {}

    @Get()
    @ApiResponse({
        status: 201,
        description: 'Get all Authors'
    })
    @ApiBearerAuth()
    getAllAuthors(): Promise<Author[]> {
        return this.authorService.getAllAuthors();
    }

    @Get('/:id')
    @ApiResponse({
        status: 201,
        description: 'Get all Author by ID'
    })
    @ApiBody({
        type: Number
    })
    @ApiBearerAuth()
    getAuthorById(@Param('id', ParseIntPipe) id: number): Promise<Author> {
        return this.authorService.getById(id);
    }

    @Post()
    @ApiResponse({
        status: 201,
        description: 'Save Author'
    })
    @ApiBody({
        type: CreateAuthorDto
    })
    @ApiBearerAuth()
    saveAuthor(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
        return this.authorService.saveAuthor(createAuthorDto);
    }
}
