import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User1 } from "./tasks/user.entity";

export const typeOrmConfig : TypeOrmModuleOptions = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "1234",
    "database": "test1",
    "entities": [User1],
    "synchronize": true
}