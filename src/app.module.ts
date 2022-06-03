import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './orm.config';
import { TasksModule } from './tasks/tasks.module';




@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
}
