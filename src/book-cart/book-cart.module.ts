import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookCartRepository } from './book-cart.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([BookCartRepository]),
      ],
})
export class BookCartModule {}
