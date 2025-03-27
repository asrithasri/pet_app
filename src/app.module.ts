import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { PetProfileModule } from './pet-profile/pet-profile.module';
import { UserProfile } from './users/entities/user-profile.entity';
import { AuthModule } from './auth/auth.module';
import { CreatePetProfile } from './pet-profile/entities/pet-profile.entity';
import { PetSellingModule } from './pet-selling/pet-selling.module';
import { PetSellingEntity } from './pet-selling/entities/pet-selling.entity';
import { StoresModule } from './stores/stores.module';
import { Store } from './stores/entities/store.entity';
import { ImagesModule } from './images/images.module';
import { Image } from './images/entities/image.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '2024',
      database: 'petapp',
      entities: [User,UserProfile,CreatePetProfile,PetSellingEntity,Store,Image],
      synchronize: true,
    }),
    UsersModule,
    PetProfileModule,AuthModule, PetSellingModule, StoresModule, ImagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
