import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import envConfig from './common/config/env.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import dbConfig from './common/config/db.config';
@Module({
  imports: [
    ConfigModule.forRoot(envConfig),
    TypeOrmModule.forRootAsync(dbConfig),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
