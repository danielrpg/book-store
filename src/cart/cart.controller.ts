import { Controller, Get, ParseIntPipe, Param, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateCartDto } from './dto/create-cart.dto';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';
import { ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { CreateAuthorDto } from 'src/author/dto/create-author.dto';

@Controller('cart')
@UseGuards(AuthGuard())
export class CartController {
    constructor(
        private cartService: CartService
    ) {}

    @Get()
    @ApiResponse({
        status: 201,
        description: 'Get all Carts'
    })
    @ApiBearerAuth()
    getAllCarts(): Promise<Cart[]> {
        return this.cartService.getAllCarts();
    }

    @Get('/:id')
    @ApiResponse({
        status: 201,
        description: 'Get Cart By Id'
    })
    @ApiBody({
        type: Number
    })
    @ApiBearerAuth()
    getCartById(@Param('id', ParseIntPipe) id: number): Promise<Cart> {
        return this.cartService.getById(id);
    }

    @Post()
    @ApiResponse({
        status: 201,
        description: 'Create a Cart'
    })
    @ApiBody({
        type: CreateAuthorDto
    })
    @ApiBearerAuth()
    saveCart(@Body() createCartDto: CreateCartDto): Promise<Cart> {
        return this.cartService.saveCart(createCartDto);
    }
}
