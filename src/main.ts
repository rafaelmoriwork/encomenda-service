import { NestFactory } from '@nestjs/core';
import AppModule from './app.module.js';
import { validationPipeConfig } from './config/validation-pipe.config.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(validationPipeConfig));
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
