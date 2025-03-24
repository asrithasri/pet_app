import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEnum, IsOptional, IsString } from "class-validator";

export class CreatePetSellingDto {

    
    @IsString()
    @ApiProperty()
    petImage: string; 

    @IsOptional()
    @IsString()
    @ApiProperty()
    licenceFile?: string;

    
    @IsString()
    @ApiProperty() 
    licenceNumber: string

    @IsString()
    @ApiProperty()
    petName: string;
    
    @IsString()
    @ApiProperty()
    petAge: string;

    
    @Transform(({ value }) => value.toLowerCase()) // Convert to lowercase before validation
    @IsEnum(['male', 'female'])
    @ApiProperty()
    sex: 'male' | 'female';

    @Transform(({ value }) => value.toLowerCase()) // Convert to lowercase before validation
    @IsEnum(['dog', 'cat', 'bird'])
    @ApiProperty()
    type: 'dog' | 'cat' | 'bird';

    @IsString()
    @ApiProperty()
    breed: string;

    @IsString()
    @ApiProperty()
    price: string;


    @IsString()
    @ApiProperty()
    ownersName: string;

    @IsString()
    @ApiProperty()
    description: string;
  

}
