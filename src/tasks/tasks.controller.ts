import { Controller, Post, Body, Get, Param, Patch, Delete, UsePipes, ValidationPipe } from "@nestjs/common";
import { get } from "http";
import { CreateTaskDto } from "./dto/CreateTask.dto";

import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}
    @Post()
    @UsePipes(ValidationPipe)
    // addTask(@Body('title') taskTitle: string, @Body('des') taskDes: string){
    addTask(@Body() createTaskDto: CreateTaskDto){
        this.tasksService.insertTask(createTaskDto.title_dto, createTaskDto.des_dto);
        return "success"
    }

    @Get()
    getAllTasks(){
        return this.tasksService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') taskId: string){
        return this.tasksService.getSingleTask(taskId);
    }

    @Patch(':id')
    updateTask(@Param('id') taskId: string, @Body() creatTaskDto: CreateTaskDto){
        this.tasksService.updateTask(taskId, creatTaskDto.title_dto, creatTaskDto.des_dto);
    }

    @Delete(':id')
    removeTask(@Param('id') taskId: string){
        this.tasksService.deleteTask(taskId);
    }
}

  