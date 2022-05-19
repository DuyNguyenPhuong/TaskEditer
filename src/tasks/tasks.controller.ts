import { Controller, Post, Body, Get } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}
    @Post()
    addTask(@Body('title') taskTitle: string, @Body('des') taskDes: string): any{
        const newID = this.tasksService.insertTask(taskTitle, taskDes);
        return {id: newID};
    }

    @Get()
    getAllTasks(){
        return this.tasksService.getTasks();
    }

  }
  