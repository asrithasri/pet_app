import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty, IsString, Length } from "class-validator";


export class LoginUserDto {

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  userName: string;

  
  @IsString()
  @Length(5,12, { message: 'Password minimum  5 digit' })
  @ApiProperty()
  @IsNotEmpty()
  password: string;
}


export class RegisterUserDto{
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @Length(10, 10, { message: 'Phone number must be 10 digit' })
    @ApiProperty()
    @IsNotEmpty()
    phoneNumber: string;

    @IsString()
    @Length(5, 12, { message: 'Password minimum  5 digit' })
    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @IsString()
    @Length(5, 12, { message: 'Password minimum  5 digit' })
    @ApiProperty()
    @IsNotEmpty()
    confirmPassword: string;
}


export class ForgotPasswordDto {

    @IsString()
    @Length(10, 10, { message: 'Phone number must be 10 digit' })
    @ApiProperty()
    @IsNotEmpty()
    phoneNumber: string;
}


export class ResetPasswordDto {
    
  
    @IsString()
    @Length(10, 10, { message: 'Phone number must be 10 digit' })
    @ApiProperty()
    @IsNotEmpty()
    phoneNumber: string;

    @IsString()
    @ApiProperty()
    otp: string;

    @IsString()
    @Length(5, 12, { message: 'Password minimum  5 digit' })
    @ApiProperty()
    @IsNotEmpty()
    newPassword: string;
  }

//   export class VerifyOtpDto {

//     @IsString()
//     @Length(10, 10, { message: 'Phone number must be 10 digit' })
//     @ApiProperty()
//     @IsNotEmpty()
//     phoneNumber: string;

//     @IsString()
//     @ApiProperty()
//     otp: string;
//   }

