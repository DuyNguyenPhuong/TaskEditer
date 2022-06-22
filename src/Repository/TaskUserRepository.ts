import { Task } from "src/entity/task.entity";
import { TaskUser } from "src/entity/taskuser.entity";

import { EntityManager, EntityRepository, Repository } from "typeorm";

@EntityRepository(Task)
export class TaskUserRepository extends Repository<TaskUser>{
    
}