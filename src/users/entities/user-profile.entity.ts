import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class UserProfile {

     @PrimaryGeneratedColumn()
     id: string;

    //  @Column({nullable:true})
    //  fullName: string;

    //  @Column({ unique: true, length: 10 })
    //  phoneNumber: string;

     @Column()
     profilePicture: string;

    @Column()
    location: string;

    @OneToOne(() => User, (user) => user.userProfile) 
    @JoinColumn()
    user: User;

}