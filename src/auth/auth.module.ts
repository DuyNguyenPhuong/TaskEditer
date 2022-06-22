import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { LocalStrategy } from './utils/LocalStrategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UsersModule,
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [
    {
        provide: 'AUTH_SERVICE',
        useClass: AuthService
    },

    {
        provide: 'USER_SERVICE',
        useClass: UsersService
    },
    LocalStrategy

],
})
export class AuthModule {}