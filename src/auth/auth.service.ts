import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from 'src/entity/user.entity';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(@Inject('USER_SERVICE') private usersService: UsersService) {}

    
   async validateUser(username: string, password: string): Promise<any> {

     const userDB = await this.usersService.findOne(username);
     console.log(userDB.user_name);
     if (userDB ) {
       const matched = comparePassword(password, userDB.user_password)
       console.log(matched);
       if (matched){
            console.log('Valid');
            return userDB;
       }
       else{
        console.log('Do not match');
        return null;
       }
     }
     console.log('Fail');
     return null;
   }
}