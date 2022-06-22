import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './orm.config';
import { TasksModule } from './tasks/tasks.module';
import { TaskUserModule } from './TaskUser/taskuser.module';
import { UsersModule } from './users/users.module';





@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
    UsersModule,
    AuthModule
    
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
}
