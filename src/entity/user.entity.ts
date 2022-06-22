import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Task } from './task.entity';


@Entity('user')
export class User {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS'
  })
  user_id: string;

  @Column()
  user_name: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  user_password: string;

  @ManyToMany(() => Task, (task) => task.id , {cascade: true,})
  task_id: Task[];


}