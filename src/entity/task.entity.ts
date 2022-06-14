import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, JoinTable } from 'typeorm';
import { User } from './user.entity';


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

  @Column()
  statustask: string;

  // @Column()
  // lasteditby: User;


  // @ManyToMany(()=> User, user => user.user_id)
  // user: User;

  // @JoinTable()
  // users: User[]
}