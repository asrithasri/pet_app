import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEnum, IsInt, IsOptional, IsString } from "class-validator";
import { IntegerType, PrimaryGeneratedColumn } from "typeorm";

export class CreatePetProfileDto {


    @IsString()
    @ApiProperty()
    petName: string;

    @IsOptional() // Profile picture might not be required at creation
    @IsString()
    @ApiProperty()
    profilePicture?: string;


    @IsString()
    @ApiProperty()
    petAge: string;

    @Transform(({ value }) => value.toLowerCase()) // Convert to lowercase before validation
    @IsEnum(['dog', 'cat', 'bird'])
    @ApiProperty()
    type: 'dog' | 'cat' | 'bird';
  
    @Transform(({ value }) => value.toLowerCase()) // Convert to lowercase before validation
    @IsEnum(['male', 'female'])
    @ApiProperty()
    sex: 'male' | 'female'; 

    @IsString()
    @ApiProperty()
    breed: string;







}
