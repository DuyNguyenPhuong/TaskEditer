import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { title } from "process";
import { User } from "src/user.entity";
import { Repository } from "typeorm";
import { takeCoverage } from "v8";
import { Task} from "./task.entity";

@Injectable()
export class TasksService{
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>
    ) {}


    // tasks: Task[] = [];

    insertTask(title: string, des: string){
        const num = String(Math.floor(Math.random()*9999));
        const newTask = new Task();
        newTask.id = num;
        newTask.titleTask = title;
        newTask.desTask = des;
        // this.tasks.push(newTask);
        return this.taskRepository.save(newTask);
    }

    getTasks(){
        return this.taskRepository.find();
    }

    getSingleTask(taskId: string){
        // const task = this.findTask(taskId)[0]
        // return {...task}
        return this.taskRepository.findOne(taskId);
    }

    updateTask(taskId: string, taskTitle: string, taskDes: string){
        // const [task, index] = this.findTask(taskId);
        // const updateTask = {...task};
        // if (!taskTitle){
        //     updateTask.titleTask = title;
        // }
        // if (!taskDes){
        //     updateTask.desTask = taskDes;
        // }
        // this.tasks[index] = updateTask;
        const editTask = new Task();
        editTask.id = taskId;
        editTask.titleTask = taskTitle;
        editTask.desTask = taskDes;
        this.taskRepository.update(taskId, editTask);
    }

    async deleteTask(taskId: string){
        // const index = this.findTask(taskId)[1];
        // this.tasks.splice(index, 1);
        await this.taskRepository.delete(taskId);
    }

    // private findTask(id: string): [Task, number]{
    //     const taskIndex = this.tasks.findIndex(ta => ta.id== id);
    //     const task = this.tasks[taskIndex];
    //     if (!task){
    //         throw new NotFoundException('Cannot find product');
    //     }
    //     return [task, taskIndex];
    // }
}