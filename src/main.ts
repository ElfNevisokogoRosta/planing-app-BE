import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.BASE_PORT || 3000, '0.0.0.0');
}
bootstrap();
