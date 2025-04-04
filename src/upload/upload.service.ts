import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { CreatePetProfile } from 'src/pet-profile/entities/pet-profile.entity';

@Injectable()
export class UploadService {
  constructor(
    private readonly configService: ConfigService,
    private readonly petProfileRepository: Repository<CreatePetProfile>,
  ) { }

  getFileUrl(filename: string): string {
    console.log(`here--------------->${this.configService.get('SERVER_URL')}/uploads/${filename}`)
    return `${this.configService.get('SERVER_URL')}/uploads/${filename}`;
  }
}
