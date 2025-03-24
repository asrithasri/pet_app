import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ForgotPasswordDto, LoginUserDto, RegisterUserDto, ResetPasswordDto } from 'src/users/dto/user.dto';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService) {}

    @Post('register')
    register(@Body() registerDto: RegisterUserDto) {
      return this.authService.register(registerDto);
    }
  
    @Post('login')
    login(@Body() loginDto: LoginUserDto) {
      
      return this.authService.login(loginDto);
    }
  
    @Post('forgot-password')
    forgotPassword(@Body() forgotDto: ForgotPasswordDto) {
      return this.authService.forgotPassword(forgotDto);
    }
  
    @Post('reset-password')
    resetPassword(@Body() resetDto: ResetPasswordDto) {
      return this.authService.resetPassword(resetDto);
    }
  
    @Post('logout')
    logout(@Query('authToken') authToken: string) {
      return this.authService.logout(authToken);
    }
  
    @Get('validate-token')
    validateToken(@Query('authToken') authToken: string) {
      return this.authService.validateAuthToken(authToken)
    }


//   @Post('login')
//   async loginOrRegister(@Body() loginDto: LoginDto) {
//     const { role } = loginDto;

//     if (role === 'user') {
//       return this.userAuthService.loginOrRegister(loginDto);

//     } else if (role === 'service_provider') {
//       return this.serviceProviderAuthService.loginOrRegister(loginDto);

//     } else {
//       throw new BadRequestException('Invalid role');
//     }
//   }


//   @Post('verify-otp')
//   async verifyOtp(@Body() verifyOtpDto: VerifyOtpDto) {
//     const { role } = verifyOtpDto;

//     if (role === 'user') {
//       return this.userAuthService.verifyOtp(verifyOtpDto);
//     } else if (role === 'service_provider') {
//       return this.serviceProviderAuthService.verifyOtp(verifyOtpDto);
//     } else {
//       throw new BadRequestException('Invalid role');
//     }
//   }

}






// @Post()
// create(@Body() createAuthDto: CreateAuthDto) {
//   return this.authService.create(createAuthDto);
// }

// @Get()
// findAll() {
//   return this.authService.findAll();
// }

// @Get(':id')
// findOne(@Param('id') id: string) {
//   return this.authService.findOne(+id);
// }

// @Patch(':id')
// update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
//   return this.authService.update(+id, updateAuthDto);
// }

// @Delete(':id')
// remove(@Param('id') id: string) {
//   return this.authService.remove(+id);
// }

