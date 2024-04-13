import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import envConfig from './common/config/env.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import dbConfig from './common/config/db.config';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { UsersController } from './users/users.controller';
@Module({
  imports: [
    ConfigModule.forRoot(envConfig),
    TypeOrmModule.forRootAsync(dbConfig),
    UsersModule,
    AuthModule,
  ],
  controllers: [AuthController, UsersController],
  providers: [],
})
export class AppModule {}
