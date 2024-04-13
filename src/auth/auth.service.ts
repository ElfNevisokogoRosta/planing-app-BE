import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './auth.types';
import { IUser } from '../common/types/iUser';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string) {
    const user = await this.userService.getUserInfo(email);
    if (user && bcrypt.compare(user.password, password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async signIn(user: IUser) {
    const userData = await this.validateUser(user.email, user.password);
    const payload: JwtPayload = {
      username: userData.username,
      email: userData.email,
    };
    return {
      access_token: this.jwtService.sign(payload),
      username: userData.username,
      userId: userData.id,
    };
  }
}
