import { userInfo } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, JoinTable, ManyToOne } from 'typeorm';
import { User } from './user.entity';


@Entity('task')
export class Task {
  @PrimaryGeneratedColumn('identity', 
  // {
  //   generatedIdentity: 'ALWAYS'
  // }
  )
  id: string;

  @Column()
  titleTask: string;

  @Column()
  desTask: string;

  @Column()
  statustask: string;

  // @Column()
  // lasteditby: string;

  @ManyToMany(() => User, (user) => user.user_id, {cascade: true,})
  @JoinTable({name: 'task-user-table'})
  EditBy: User[];

  // @ManyToMany(()=> User, user => user.user_id)
  // user: User;

  // @JoinTable()
  // users: User[]
}