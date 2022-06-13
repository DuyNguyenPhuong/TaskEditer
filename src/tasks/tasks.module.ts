import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "src/entity/task.entity";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";

@Module({
    imports:[
        TypeOrmModule.forFeature([Task])
    ],
    controllers: [TasksController],
    providers: [TasksService],
})
export class TasksModule{}

