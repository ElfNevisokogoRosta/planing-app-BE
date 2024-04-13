import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IUser } from '../types/iUser';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
@Injectable()
export class PassPipe implements PipeTransform {
  constructor() {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async transform(value: IUser, _metadata: ArgumentMetadata) {
    try {
      console.log(value);
      const saltOrRounds = process.env.SALT;
      console.log(value.password);
      const hash = await bcrypt.hash(value.password, saltOrRounds);
      console.log(hash);
      return { ...value, password: hash };
    } catch (error) {
      throw new BadRequestException('Validation failed');
    }
  }
}
