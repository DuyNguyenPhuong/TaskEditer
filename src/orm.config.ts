import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Task } from "./entity/task.entity";

import { User } from "./entity/user.entity";

export const typeOrmConfig : TypeOrmModuleOptions = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "1234",
    "database": "test1",
    "entities": [Task, User],
    "synchronize": true
}