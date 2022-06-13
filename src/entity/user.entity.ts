import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS'
  })
  user_id: string;

  @Column()
  user_password: string;

//   @Column()
//   user_time: string;

  // @Column()
  // active: string;
}