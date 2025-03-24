import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PetSellingEntity{

    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    petImage: string; 

    @Column()
    licenceFile: string;

    @Column()
    licenceNumber: string

    @Column()
    petName: string;

    @Column()
    petAge: string;
    
    @Column({ type: 'enum', enum: ['male', 'female'] })
    sex: 'male' | 'female';

  
    @Column({ type: 'enum', enum: ['dog', 'cat', 'bird'] })
    type: 'dog' | 'cat' | 'bird';

    @Column()
    breed: string;

    @Column()
    price: string;

    @Column()
    ownersName: string;

    @Column()
    description: string;


}
 