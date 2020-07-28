import { Controller, Get, ParseIntPipe, Param, Post, Body } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';
import { CreateCartDto } from './dto/create-cart.dto';

@Controller('cart')
export class CartController {
    constructor(
        private cartService: CartService
    ) {}

    @Get()
    getAllCarts(): Promise<Cart[]> {
        return this.cartService.getAllCarts();
    }

    @Get('/:id')
    getAuthorById(@Param('id', ParseIntPipe) id: number): Promise<Cart> {
        return this.cartService.getById(id);
    }

    @Post()
    saveAuthor(@Body() createCartDto: CreateCartDto): Promise<Cart> {
        return this.cartService.saveCart(createCartDto);
    }
}
