import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Store {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    category: string

    @Column()
    zone:string;

    @Column()
    storeName:string;

    @Column()
    price:string;

    @Column()
    photo:string;
}
