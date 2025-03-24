import { PartialType } from '@nestjs/swagger';
import { CreatePetSellingDto } from './create-pet-selling.dto';

export class UpdatePetSellingDto extends PartialType(CreatePetSellingDto) {}
