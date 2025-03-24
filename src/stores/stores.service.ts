import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ){}
  

  async create(createStoreDto: CreateStoreDto): Promise<Store> {
    const stores = await this.storeRepository.create(createStoreDto);
    return await this.storeRepository.save(stores);
  }

  async findAll(): Promise<Store[]> {
    const stores =  await this.storeRepository.find();

    console.log("findall Stores:", stores);
    return stores; 
  }

  async findOne(id : string) {
    const store = await this.storeRepository.findOne({ where: {id} });
    
        if (!store) {
          throw new UnauthorizedException('Store not already registerd');
        }
    
        return store;
  }

  async update(id: string, updateStoreDto: UpdateStoreDto): Promise<Store> {
    const existingStore = await this.storeRepository.findOne({ where: {id}})
    const storesData =   this.storeRepository.merge(existingStore,updateStoreDto)
    return await this.storeRepository.save(storesData);
  }

  async remove(id: string) {
    const  existingStore =  await this.findOne(id);
    return  await this.storeRepository.remove(
      existingStore,
    );
  }
}
