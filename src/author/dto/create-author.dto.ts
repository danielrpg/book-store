import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
    @ApiProperty({ type: String, description: 'name of the author'})
    name: string;

    @ApiProperty({ type: String, description: 'Last Name of the author'})
    lastName: string;

    @ApiProperty({ type: Number, description: 'Age of the author'})
    age: number;

    @ApiProperty({ type: String, description: 'Nationality of the author'})
    nationality: string;

    @ApiProperty({ type: String, description: 'Birthdate of the author'})
    birthdate: string; 
}