import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreatePetProfileDto } from './dto/create-pet-profile.dto';
import { UpdatePetProfileDto } from './dto/update-pet-profile.dto';
import { CreatePetProfile } from './entities/pet-profile.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PetProfileService {
  constructor(
    @InjectRepository(CreatePetProfile)
    private readonly petProfileRepository: Repository<CreatePetProfile>,
  ) { }


  // async create(createPetProfileDto: CreatePetProfileDto, imageUrl: string): Promise<CreatePetProfile> {
  //   const petProfile = this.petProfileRepository.create({ ...createPetProfileDto, profilePicture: imageUrl });
  //   return this.petProfileRepository.save(petProfile);
  
  async createAPetProfile(createPetProfileDto: CreatePetProfileDto): Promise<CreatePetProfile> {
    const pet = this.petProfileRepository.create(createPetProfileDto);
    return await this.petProfileRepository.save(pet);
    
  }

  async findAll(): Promise<CreatePetProfile[]> {
    const pets =  await this.petProfileRepository.find();
    console.log('pets are',pets)
    return pets;
  }

  //gets pets profils
  // async getPetsProfilePicture() {
  //   const pictures = await this.petProfileRepository.find()
  // }  


  async findOne(id: string) {
    const pet = await this.petProfileRepository.findOne({ where: { id } });

    if (!pet) {
      throw new UnauthorizedException('Pet not already registerd');
    }

    return pet;
  }


  async update(id: string, updatePetProfileDto: UpdatePetProfileDto):Promise<CreatePetProfile> {
    const existingProfile = await this.petProfileRepository.findOne({ where: { id } })
    const profileData = this.petProfileRepository.merge(existingProfile,updatePetProfileDto);

    return await this.petProfileRepository.save(profileData,);
  }


  async remove(id: string) {
    const existingProfile =  await this.findOne(id);
    return  await this.petProfileRepository.remove(
      existingProfile,
    );
  }
}


