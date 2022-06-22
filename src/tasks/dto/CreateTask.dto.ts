import { IsNotEmpty } from "class-validator";
export class CreateTaskDto{

    id_dto: string;

    @IsNotEmpty()
    title_dto: string;

    @IsNotEmpty()
    des_dto: string;

    active_dto: string;

    editby_dto: string[];
}