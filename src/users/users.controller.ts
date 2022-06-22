import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { CreateUserDto } from "src/tasks/dto/CreateUser.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Post()
    addUser(@Body() createUserDto: CreateUserDto){
        this.usersService.insertUser(createUserDto);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    getAllUsers(){
        return this.usersService.getUser();
    }
}

  