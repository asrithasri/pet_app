import { Module } from '@nestjs/common';
import { PetSellingService } from './pet-selling.service';
import { PetSellingController } from './pet-selling.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetSellingEntity } from './entities/pet-selling.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PetSellingEntity])],
  controllers: [PetSellingController],
  providers: [PetSellingService],
})
export class PetSellingModule {}
