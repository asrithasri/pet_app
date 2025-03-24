import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetProfileService } from './pet-profile.service';
import { CreatePetProfileDto } from './dto/create-pet-profile.dto';
import { UpdatePetProfileDto } from './dto/update-pet-profile.dto';
import { CreatePetProfile } from './entities/pet-profile.entity';

@Controller('pet-profile')
export class PetProfileController {

  constructor(
    private readonly petProfileService: PetProfileService) { }

  @Post('/create')
  async createAPetProfile(@Body() createPetProfileDto: CreatePetProfileDto): Promise<CreatePetProfile> {
    const pet = await this.petProfileService.createAPetProfile(createPetProfileDto);
    return pet;
  }

  // ✅ Test Endpoint
  @Post('test-endpoint')
  receivedTest(@Body() receivedTest: string) {
    console.log('the recieved daata is ------------->', receivedTest)
  }


  @Get('/all')
  async findAll() {
    return await this.petProfileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.petProfileService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePetProfileDto: UpdatePetProfileDto) {
    return await this.petProfileService.update(id, updatePetProfileDto)
  };

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.petProfileService.remove(id);
  }


}

