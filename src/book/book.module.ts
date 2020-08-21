import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookRepository } from './book.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AuthorRepository } from 'src/author/author.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookRepository]),
    AuthModule,
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
