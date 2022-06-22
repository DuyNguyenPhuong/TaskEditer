import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "src/entity/task.entity";
import { User } from "src/entity/user.entity";
import { TaskRepository } from "src/Repository/TaskRepository";
import { UserRepository } from "src/Repository/UserRepository";
import { TaskUserModule } from "src/TaskUser/taskuser.module";
import { UsersModule } from "src/users/users.module";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";

@Module({
    imports:[
        TypeOrmModule.forFeature([Task, User]),
        // TaskUserModule,
        TaskRepository,
        UserRepository
    ],
    controllers: [TasksController],
    providers: [TasksService],
})
export class TasksModule{}

