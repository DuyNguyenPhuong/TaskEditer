import { Task } from "src/entity/task.entity";
import { User } from "src/entity/user.entity";
import { CreateTaskDto } from "src/tasks/dto/CreateTask.dto";
import { EntityManager, EntityRepository, Repository } from "typeorm";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{
    
}