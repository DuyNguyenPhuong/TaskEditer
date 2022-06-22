import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(
        @Inject('AUTH_SERVICE')
        private authService: AuthService) {
        super();
      }
    
      async validate(username: string, password: string): Promise<any> {
        this.authService.validateUser(username, password);
      }
}