import { Injectable } from '@nestjs/common';
import { AuthorRepository } from './author.repository';
import { Author } from './author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(AuthorRepository)
        private authorRepository: AuthorRepository
    ) {}

    getAllAuthors(): Promise<Author[]> {
        return this.authorRepository.getAllAuthors();
    }

    getById(id: number): Promise<Author> {
        return this.authorRepository.getById(id);
    }

    saveAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
        return this.authorRepository.saveAuthor(createAuthorDto);
    }
}
