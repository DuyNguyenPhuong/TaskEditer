import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { UserRepository } from "src/Repository/UserRepository";
import { CreateUserDto } from "src/tasks/dto/CreateUser.dto";
import { encodePassword } from "src/utils/bcrypt";


import { Repository } from "typeorm";


@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: UserRepository
    ) {}


    public async insertUser(createUserDto: CreateUserDto){
        if (createUserDto.userpass_dto.length >10){
            throw new HttpException({key: 'TOO_LONG_PASS'}, HttpStatus.BAD_REQUEST);
        }

        const password = encodePassword(createUserDto.userpass_dto);
        const newUser = new User();
        newUser.user_name = createUserDto.username_dto;
        newUser.user_password = password;


        const result = await this.usersRepository.save(newUser);
        if (result) return result;
        throw new HttpException({key: 'INTERNAL_SERVER'}, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public async getUser(){
            const result = await this.usersRepository.find();
        return result
    }

    async findOne(username: string) {
        return await this.usersRepository.findOne(
            {
                where: {
                    user_name: username
                }
            }
        );
    }
}