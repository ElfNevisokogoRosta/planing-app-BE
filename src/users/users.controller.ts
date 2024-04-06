import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from '../common/schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }
  @Get(':id')
  async getUser(@Param('id') id: number) {
    return await this.usersService.getUser(+id);
  }
  @Patch(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.updateUser(+id, updateUserDto);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.usersService.deleteUser(+id);
  }
}
