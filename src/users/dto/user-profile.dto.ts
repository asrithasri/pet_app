import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class UserProfileDto {

  // @IsString()
  // @ApiProperty()
  // @IsNotEmpty()
  // fullName: string;

  
  // @IsString()
  // @Length(5,12, { message: 'Phone number minimum  10 digit' })
  // @ApiProperty()
  // @IsNotEmpty()
  // phoneNumber: string;

  @ApiProperty()
  profilePicture: string;

  @ApiProperty()
  location: string;


}
