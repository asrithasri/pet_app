import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetSellingService } from './pet-selling.service';
import { CreatePetSellingDto } from './dto/create-pet-selling.dto';
import { UpdatePetSellingDto } from './dto/update-pet-selling.dto';

@Controller('pet-selling')
export class PetSellingController {
  constructor(private readonly petSellingService: PetSellingService) {}

  @Post('/create')
  async create(@Body() createPetSellingDto: CreatePetSellingDto) {
    return await this.petSellingService.create(createPetSellingDto);
  }

  @Get('/all')
  async findAll() {
  return await this.petSellingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petSellingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetSellingDto: UpdatePetSellingDto) {
    return this.petSellingService.update(+id, updatePetSellingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petSellingService.remove(+id);
  }
}
