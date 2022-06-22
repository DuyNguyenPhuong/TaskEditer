import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskUser } from "src/entity/taskuser.entity";
import { TaskUserController } from "./taskuser.controller";
import { TaskUserService } from "./taskuser.service";




@Module({
    imports:[
        TypeOrmModule.forFeature([TaskUser])
    ],
    // controllers: [TaskUserController],
    // providers: [TaskUserService],
})
export class TaskUserModule{}

