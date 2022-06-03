import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  titleTask: string;

  @Column()
  desTask: string;
}