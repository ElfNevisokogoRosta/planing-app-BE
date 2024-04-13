import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IUser } from '../types/iUser';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
@Injectable()
export class PassPipe implements PipeTransform {
  constructor() {}
  async transform(value: IUser) {
    try {
      const saltOrRounds = process.env.SALT;
      const hashedPassword = await bcrypt.hash(value.password, +saltOrRounds);
      return { ...value, password: hashedPassword };
    } catch (error) {
      throw new BadRequestException('Validation failed');
    }
  }
}
