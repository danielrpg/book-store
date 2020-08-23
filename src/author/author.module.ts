import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorRepository } from './author.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorRepository]),
    AuthModule,
  ],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
