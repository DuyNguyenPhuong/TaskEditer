import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
import { User1 } from "./user.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([User1])
    ],
    controllers: [TasksController],
    providers: [TasksService],
})
export class TasksModule{}

