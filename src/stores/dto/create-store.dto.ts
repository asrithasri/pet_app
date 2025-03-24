import { ApiProperty } from "@nestjs/swagger";
import { IsString, isString } from "class-validator";

export class CreateStoreDto {

    @IsString()
    @ApiProperty()
    category: string;

    @IsString()
    @ApiProperty()
    zone: string;

    @IsString()
    @ApiProperty()
    storeName: string;

    @IsString()
    @ApiProperty()
    price: string;

    @IsString()
    @ApiProperty()
    photo: string;
}
