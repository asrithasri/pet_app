import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "./user-profile.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: false })
    userName: string;

    @Column({ unique: true, length: 10 })
    phoneNumber: string;

    @Column({ nullable: true })
    otp: string;

    @Column({ type: 'timestamp', nullable: true })
    otpExpiresAt: Date;

    @Column({ nullable: true })
    authToken: string;

    @Column({ nullable: false })
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToOne(() => UserProfile, (profile) => profile.user, { cascade: true })
    userProfile: UserProfile;


}
