import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IUser } from '../common/types/iUser';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() user: IUser) {
    return await this.authService.signIn(user);
  }
}
