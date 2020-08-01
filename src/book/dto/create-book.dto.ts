import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty({ type: String, description: 'Title of the Book'})
    title: string;

    @ApiProperty({ type: String, description: 'Description of the Book'})
    description: string;
    
    @ApiProperty({ type: String, description: 'Price of the Book'})
    price: number;
}