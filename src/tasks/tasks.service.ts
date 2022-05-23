import { Injectable, NotFoundException } from "@nestjs/common";
import { title } from "process";
import { takeCoverage } from "v8";
import { Task } from "./tasks.model";

@Injectable()
export class TasksService{
    tasks: Task[] = [];

    insertTask(title: string, des: string){
        const num = String(this.tasks.length+1);
        const newTask = new Task(num, title, des);
        this.tasks.push(newTask);
        return num;
    }

    getTasks(){
    // copy again vi neu ko thi chi refer
        return [...this.tasks];
    }

    getSingleTask(taskId: string){
        const task = this.findTask(taskId)[0]
        return {...task}
    }

    updateTask(taskId: string, taskTitle: string, taskDes: string){
        const [task, index] = this.findTask(taskId);
        const updateTask = {...task};
        if (!taskTitle){
            updateTask.title = title;
        }
        if (!taskDes){
            updateTask.des = taskDes;
        }
        this.tasks[index] = updateTask;
    }

    deleteTask(taskId: string){
        const index = this.findTask(taskId)[1];
        this.tasks.splice(index, 1);
    }

    private findTask(id: string): [Task, number]{
        const taskIndex = this.tasks.findIndex(ta => ta.id== id);
        const task = this.tasks[taskIndex];
        if (!task){
            throw new NotFoundException('Cannot find product');
        }
        return [task, taskIndex];
    }
}