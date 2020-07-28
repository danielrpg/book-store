import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartRepository } from './cart.repository';
import { Cart } from './cart.entity';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(CartRepository)
        private cartRepository: CartRepository
    ) {}

    getAllCarts(): Promise<Cart[]> {
        return this.cartRepository.getAllCarts();
    }

    getById(id: number): Promise<Cart> {
        return this.cartRepository.getById(id);
    }

    saveCart(createCartDto: CreateCartDto): Promise<Cart> {
        return this.cartRepository.saveCart(createCartDto);
    }
}
