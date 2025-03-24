import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { UserProfile } from 'src/users/entities/user-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,UserProfile])],
  controllers: [AuthController],
  providers: [ AuthService],
})
export class AuthModule {}
