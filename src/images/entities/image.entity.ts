import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    imageUrl: string;
}
