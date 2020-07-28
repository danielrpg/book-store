import { EntityRepository, Repository } from "typeorm";
import { Cart } from "./cart.entity";
import { CreateCartDto } from "./dto/create-cart.dto";

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart> {
    async getAllCarts(): Promise<Cart[]> {
        const query = this.createQueryBuilder('cart');
        const carts = await query.getMany();
        return carts;
    }

    async getById(id: number): Promise<Cart> {
        return await this.findOne(id);
    }

    async saveCart(createCartDto: CreateCartDto): Promise<Cart> {
        const { nit, name } = createCartDto;

        const cart = new Cart();
        cart.nit = nit;
        cart.name = name;

        await this.save(cart);

        return cart;
    }
}