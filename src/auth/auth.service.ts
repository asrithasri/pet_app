import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ForgotPasswordDto, LoginUserDto, RegisterUserDto, ResetPasswordDto, } from 'src/users/dto/user.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { generateAuthToken } from 'src/utils/auth-token';
import * as moment from 'moment';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  //register
  async register(registerDto: RegisterUserDto): Promise<string> {
    const { userName, phoneNumber, password, confirmPassword } = registerDto;

    console.log("password:", password ,"confirmPassword",confirmPassword );

    if (password !== confirmPassword) {
      throw new BadRequestException('Passwords do not match');
    }

    
    // console.log("Register",userName,
    //   password,confirmPassword,
    //   phoneNumber);

    const existingUser = await this.userRepository.findOne({ where: { phoneNumber } });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }


    // const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);
    const newUser = this.userRepository.create({ userName, phoneNumber, password });
    console.log("new User created",newUser);
    await this.userRepository.save(newUser);

    return 'User registered successfully';
  }

  //Login
  async login(loginDto: LoginUserDto): Promise<{ message: string; authToken: string }> {

    const { userName, password } = loginDto; 

    // console.log()

    const user = await this.userRepository.findOne({ where: { password } });

    // console.log("user", user);

    // console.log("userp", user.password);

    if (!user || !(password === user.password)) {

      // console.log(user.password, password);

      // console.log(await bcrypt.compare(password, user.password))

      throw new UnauthorizedException('Invalid username or password')
    }

    // Generate 16-character alphanumeric token
    const authToken = generateAuthToken(); // Generate a 16-character token
    user.authToken = authToken;
    await this.userRepository.save(user);

    return { message: 'OTP verified , Login successfully', authToken };
  }

  //forgotpassword
  async forgotPassword(forgotDto: ForgotPasswordDto): Promise<{ otp }> {
    const { phoneNumber } = forgotDto;
    const user = await this.userRepository.findOne({ where: { phoneNumber } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
    const otpExpiresAt = moment().add(5, 'minutes').toDate(); // Expire in 5 minutes

    user.otp = otp;
    user.otpExpiresAt = otpExpiresAt;
    await this.userRepository.save(user);

    console.log(`OTP for ${phoneNumber}: ${otp}`); // Replace with an actual OTP service

    return { otp: otp };
  }

  //Reset password
  async resetPassword(resetDto: ResetPasswordDto): Promise<string> {
    const { phoneNumber, otp, newPassword } = resetDto;

    const user = await this.userRepository.findOne({ where: { phoneNumber } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!user.otp || !user.otpExpiresAt) {
      throw new BadRequestException('No OTP request found');
    }

    if (user.otp !== otp) {
      throw new BadRequestException('Invalid OTP');
    }

    if (moment().isAfter(user.otpExpiresAt)) {
      throw new BadRequestException('OTP has expired');
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.otp = null;
    user.otpExpiresAt = null;
    await this.userRepository.save(user);

    return 'Password reset successfully';
  }
  //logout
  async logout(authToken: string): Promise<string> {
    const user = await this.userRepository.findOne({ where: { authToken } });

    if (!user) {
      throw new UnauthorizedException('Invalid session');
    }

    user.authToken = null;
    await this.userRepository.save(user);

    return 'User logged out successfully';
  }

  async validateAuthToken(authToken: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { authToken } });
    return !!user;
  }
}