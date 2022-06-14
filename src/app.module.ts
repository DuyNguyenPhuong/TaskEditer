import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './orm.config';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';




@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
    UsersModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
}
