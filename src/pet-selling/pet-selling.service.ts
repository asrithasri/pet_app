import { Injectable } from '@nestjs/common';
import { CreatePetSellingDto } from './dto/create-pet-selling.dto';
import { UpdatePetSellingDto } from './dto/update-pet-selling.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PetSellingEntity } from './entities/pet-selling.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PetSellingService {
  constructor(
    @InjectRepository(PetSellingEntity)
    private readonly petSellingRepository: Repository <PetSellingEntity>,
  ) {}   


  async create(createPetProfileDto: CreatePetSellingDto): Promise<PetSellingEntity> {
    const sellingPet =  this.petSellingRepository.create(createPetProfileDto);
    return  await this.petSellingRepository.save(sellingPet);
  }

  async findAll(): Promise<PetSellingEntity[]> {
    const petsForSelling =  await this.petSellingRepository.find();
    
    console.log('pets are',petsForSelling)
    return petsForSelling; 
  }

  findOne(id: number) {
    return `This action returns a #${id} petSelling`;
  }

  update(id: number, updatePetSellingDto: UpdatePetSellingDto) {
    return `This action updates a #${id} petSelling`;
  }

  remove(id: number) {
    return `This action removes a #${id} petSelling`;
  }
}
