import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titleTask: string;

  @Column()
  desTask: string;
}