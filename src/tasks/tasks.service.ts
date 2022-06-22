import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { response } from "express";
import { Task } from "src/entity/task.entity";
import { User } from "src/entity/user.entity";
import { TaskRepository,  } from "src/Repository/TaskRepository";
import { TaskUserRepository } from "src/Repository/TaskUserRepository";
import { UserRepository } from "src/Repository/UserRepository";

import { getCustomRepository, getRepository, Like, Not, Repository } from "typeorm";
import { CreateTaskDto } from "./dto/CreateTask.dto";


@Injectable()
export class TasksService{
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: TaskRepository,

        @InjectRepository(User)
        private readonly userRepository: UserRepository

    ) {}


    public async insertTask(createTaskDto: CreateTaskDto){
        if (createTaskDto.title_dto.length>10 || createTaskDto.des_dto.length >10){
            throw new HttpException({key: 'TOO_LONG_TITLE'}, HttpStatus.BAD_REQUEST);
        }
        
       
        const newTask = new Task();
        newTask.titleTask = createTaskDto.title_dto;
        newTask.desTask = createTaskDto.des_dto;
        newTask.statustask = "1";

        let editByArr = [];
        for (var val of createTaskDto.editby_dto){
            const userEntity = await this.userRepository.findOne(val);
            editByArr.push(userEntity);
        }
        // const userTest = await this.userRepository.findOne('1');
        // const userTest2 = await this.userRepository.findOne('2');
        newTask.EditBy = editByArr;
        // newTask.lastEditBy = createTaskDto.editby_dto;
    
        const result = await this.taskRepository.save(newTask);
        if (result) return result;
        throw new HttpException({key: 'INTERNAL_SERVER'}, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public async getTasks(){
        // const result this.TaskRepo.findTask;
        const result = await this.taskRepository.find();
        return result
    }

    getSingleTask(taskId: string){
        // const task = this.findTask(taskId)[0]
        // return {...task}
        return this.taskRepository.findOne(taskId);
    }

    public async updateTask(taskId: string, updateTaskDto: CreateTaskDto){
        const updateId = await this.taskRepository.findOneOrFail(taskId);
        if (!updateId){
            throw new HttpException({key: 'INTERNAL_SERVER'}, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        // this.taskRepository.delete(updateId);

        const editTask = new Task();
        editTask.id = taskId;
        
        editTask.titleTask = updateTaskDto.title_dto;
        editTask.desTask = updateTaskDto.des_dto;
        editTask.statustask = updateTaskDto.active_dto;
        // editTask.EditBy = ['1', '3'];

        const userTest = await this.userRepository.findOne('1');
        const userTest2 = await this.userRepository.findOne('3');
        editTask.EditBy = [userTest, userTest2];
        editTask.EditBy = await this.findUserEntity(updateTaskDto.editby_dto);
        // this.taskRepository.save(editTask);
        this.taskRepository.update(taskId, editTask);
    }

    async deleteTask(taskId: string){
        // const index = this.findTask(taskId)[1];
        // this.tasks.splice(index, 1);
        await this.taskRepository.update(taskId, {statustask: "0"});
    }

    async findUserEntity(IdArray: string[]){
        let editByArr = [];
        for (var val of IdArray){
            const userEntity = await this.userRepository.findOne(val);
            editByArr.push(userEntity);
        }
        // const userTest = await this.userRepository.findOne('1');
        // const userTest2 = await this.userRepository.findOne('2');
        return editByArr;
    }
}
