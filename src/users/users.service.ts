import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from '../common/repository/user.repository';
import { CreateUserDto, UpdateUserDto } from '../common/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}
  async createUser(user: CreateUserDto) {
    try {
      return await this.userRepository.createUser(user);
    } catch (error) {
      throw new ConflictException();
    }
  }
  async getUser(id: number) {
    try {
      return await this.userRepository.getUser(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
  async updateUser(id: number, user: UpdateUserDto) {
    try {
      return await this.userRepository.updateUser(id, user);
    } catch (e) {
      throw new NotFoundException();
    }
  }
  async deleteUser(id: number) {
    try {
      return await this.userRepository.deleteUser(id);
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
