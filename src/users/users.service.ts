import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";


import { Repository } from "typeorm";


@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ) {}


    public async insertUser(pass: string){
        if (pass.length >10){
            throw new HttpException({key: 'TOO_LONG_PASS'}, HttpStatus.BAD_REQUEST);
        }
        const newUser = new User();
        newUser.user_password = pass;
        const result = await this.usersRepository.save(newUser);
        if (result) return result;
        throw new HttpException({key: 'INTERNAL_SERVER'}, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public async getUser(){
            const result = await this.usersRepository.find();
        return result
    }

}