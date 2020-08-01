import { ApiProperty } from "@nestjs/swagger";
import { string } from "@hapi/joi";

export class CreateCartDto {
    @ApiProperty({ type: string, description: 'Nit of the Cart'})
    nit: string;

    @ApiProperty({ type: string, description: 'Name of the Cart'})
    name: string;
}