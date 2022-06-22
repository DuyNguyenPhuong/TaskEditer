import { Body, Controller, Get, Post } from "@nestjs/common";
import { TaskUserService } from "./taskuser.service";

@Controller('users')
export class TaskUserController {
    constructor(private readonly usersService: TaskUserService){}
    // @Post()
    // addUser(@Body('pass') pass: string){
    //     this.usersService.insertUser(pass);
    // }

    @Get()
    getAllUsers(){
        return this.usersService.getUserTask();
    }
}

  