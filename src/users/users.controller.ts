import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Post()
    addUser(@Body() pass: string){
        this.usersService.insertUser(pass);
    }

    @Get()
    getAllUsers(){
        return this.usersService.getUser();
    }
}

  