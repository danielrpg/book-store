import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookRepository } from './book.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { AuthorModule } from '../author/author.module';
import { AuthorRepository } from '../author/author.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookRepository, AuthorRepository]),
    AuthModule,
    AuthorModule,
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
