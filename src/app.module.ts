import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { CartModule } from './cart/cart.module';
import { BookCartModule } from './book-cart/book-cart.module';
import * as Joi from '@hapi/joi';

@Module({
  imports: [ConfigModule.forRoot({
    validationSchema: Joi.object({
      POSTGRES_HOST: Joi.string().required(),
      POSTGRES_PORT: Joi.number().required(),
      POSTGRES_USER: Joi.string().required(),
      POSTGRES_PASSWORD: Joi.string().required(),
      POSTGRES_DB: Joi.string().required(),
      PORT: Joi.number(),
    })
  }), ConfigModule, DatabaseModule, AuthModule, BookModule, AuthorModule, CartModule, BookCartModule],
})
export class AppModule {}
