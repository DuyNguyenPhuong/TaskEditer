import { Controller, Post, Body, Get, Param, Patch, Delete, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateTaskDto } from "./dto/CreateTask.dto";

import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}
    @Post()
    @UsePipes(ValidationPipe)
    addTask(@Body() createTaskDto: CreateTaskDto){
        this.tasksService.insertTask(createTaskDto);
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
    updateTask(@Param('id') taskId: string, @Body() createTaskDto: CreateTaskDto){
        this.tasksService.updateTask(taskId, createTaskDto);
    }

    @Delete(':id')
    removeTask(@Param('id') taskId: string){
        this.tasksService.deleteTask(taskId);
    }
}

  