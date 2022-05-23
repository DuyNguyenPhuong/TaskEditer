import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { get } from "http";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}
    @Post()
    addTask(@Body('title') taskTitle: string, @Body('des') taskDes: string): {id: string}{
        const newID = this.tasksService.insertTask(taskTitle, taskDes);
        return {id: newID};
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
    updateTask(@Param('id') taskId: string, @Body('title') taskTitle: string, @Body('des') taskDes: string){
        this.tasksService.updateTask(taskId, taskTitle, taskDes);
    }

    @Delete(':id')
        removeTask(@Param('id') taskId: string){
            this.tasksService.deleteTask(taskId);
        }
    }

  