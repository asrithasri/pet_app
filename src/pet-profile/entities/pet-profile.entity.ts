import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreatePetProfile {
    
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    petName: string;

    @Column({ nullable: true })   // Store as URL instead of binary
    profilePicture?: string;

    @Column()
    petAge: string;

    @Column({ type: 'enum', enum: ['dog', 'cat', 'bird'] })
    type: 'dog' | 'cat' | 'bird';

    @Column({ type: 'enum', enum: ['male', 'female'] })
    sex: 'male' | 'female';

    @Column()
    breed: string;
}
