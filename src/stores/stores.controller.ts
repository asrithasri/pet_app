import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post("/create")
  async create(@Body() createStoreDto: CreateStoreDto) {
    return await this.storesService.create(createStoreDto);
  }

  @Get("/all")
  async findAll() {
    return await this.storesService.findAll();
  }

  @Get('/findOne/:id')
  async findOne(@Param('id') id: string) {
    return  await this.storesService.findOne(id);
  }

  @Patch('/patch/:id')
  async update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return await this.storesService.update(id, updateStoreDto);
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return await this.storesService.remove(id);
  }
}
