import { Entity, Column, PrimaryColumn} from 'typeorm';

@Entity('usertask')
export class TaskUser {
  @PrimaryColumn()
  users_id: string;

  @Column()
  tasks_id: string;
}