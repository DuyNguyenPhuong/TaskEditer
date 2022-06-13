import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Task {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS'
  })
  id: string;

  @Column()
  titleTask: string;

  @Column()
  desTask: string;

  // @Column()
  // active: string;
}