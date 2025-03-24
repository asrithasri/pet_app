import { Module } from '@nestjs/common';
import { PetProfileService } from './pet-profile.service';
import { PetProfileController } from './pet-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreatePetProfile } from './entities/pet-profile.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CreatePetProfile])],
  controllers: [PetProfileController],
  providers: [PetProfileService],
})
export class PetProfileModule {}
