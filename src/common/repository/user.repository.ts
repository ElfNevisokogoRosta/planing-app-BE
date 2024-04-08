import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../../../db/entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async createUser(user: Partial<User>) {
    const isUser = await this.findOneBy({ email: user.email });
    if (isUser !== null) {
      throw new Error();
    }
    return await this.save(user);
  }

  async getUser(id: number) {
    const user = await this.findOne({ where: { id: id } });
    if (!user) throw new Error();
    return user;
  }
  async updateUser(id: number, user: Partial<User>) {
    const isUser = await this.findOne({ where: { id: id } });
    if (!isUser) throw new Error();
    return await this.update(id, user);
  }
  async deleteUser(id: number) {
    const isUser = await this.findOne({ where: { id: id } });
    if (!isUser) throw new Error();
    return await this.delete(id);
  }
}
