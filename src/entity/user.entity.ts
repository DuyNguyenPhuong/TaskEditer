import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Task } from './task.entity';


@Entity()
export class User {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS'
  })
  user_id: string;

  @Column()
  user_password: string;

  @ManyToMany(()=> Task, task => task.id)
  task: Task;
}