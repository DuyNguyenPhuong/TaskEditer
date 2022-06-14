import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { response } from "express";
import { Task } from "src/entity/task.entity";

import { Like, Not, Repository } from "typeorm";


@Injectable()
export class TasksService{
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>
    ) {}



    public async insertTask(title: string, des: string){
        if (title.length>10 || des.length >10){
            throw new HttpException({key: 'TOO_LONG_TITLE'}, HttpStatus.BAD_REQUEST);
        }
        const newTask = new Task();
        newTask.titleTask = title;
        newTask.desTask = des;
        // newTask.active = "1";
        const result = await this.taskRepository.save(newTask);
        if (result) return result;
        throw new HttpException({key: 'INTERNAL_SERVER'}, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public async getTasks(){
    // public async getTasks(taskID: string, taskTitle: string, taskDes: string){
        // const result = await this.taskRepository.createQueryBuilder()
        // .where("task.id = taskID")
        // .orWhere("task.titleTask = :title", {title: taskTitle})
        // .orWhere("task.desTask = :des", {des: taskDes})
        // .execute();

    
            // options: {
            //     // id: Like('%'+ taskID + '%'),
            //     // titleTask: Like('%'+ taskTitle + '%'),
            //     // desTask: Like('%' + taskDes + '%'),
            //     id: taskID,
            //     titleTask: taskTitle,
            //     desTask: taskDes,
            // },
        //         id: Like('%'+ taskID + '%'),
        //   });
            const result = await this.taskRepository.find();
        return result
    }

    // getSingleTask(taskId: string){
    //     // const task = this.findTask(taskId)[0]
    //     // return {...task}
    //     return this.taskRepository.findOne(taskId);
    // }

    updateTask(taskId: string, taskTitle: string, taskDes: string){
        const editTask = new Task();
        // editTask.id = taskId;
        editTask.titleTask = taskTitle;
        editTask.desTask = taskDes;
        this.taskRepository.update(taskId, editTask);
    }

    async deleteTask(taskId: string){
        // const index = this.findTask(taskId)[1];
        // this.tasks.splice(index, 1);
        await this.taskRepository.delete(taskId);
    }
}