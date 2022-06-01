import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './orm.config';
import { TasksModule } from './tasks/tasks.module';
import { User1 } from './tasks/user.entity';
import { User } from './user.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    // TypeOrmModule.forFeature([User1]),
    TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
