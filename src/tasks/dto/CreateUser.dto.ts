import { Exclude } from "class-transformer";
import { IsNotEmpty } from "class-validator";
export class CreateUserDto{

    id_dto: string;

    username_dto: string;

    @Exclude({ toPlainOnly: true })
    userpass_dto: string;
}