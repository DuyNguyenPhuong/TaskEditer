import { Injectable } from "@nestjs/common";
import { Task } from "./tasks.model";

@Injectable()
export class TasksService{
    tasks: Task[] = [];

    insertTask(title: string, des: string){
        const num = String(this.tasks.length+1);
        const newTask = new Task(num, title, des);
        this.tasks.push(newTask);
        return title;
    }

    getTasks(){
    // copy again vi neu ko thi chi refer
        return [...this.tasks];
    }
}