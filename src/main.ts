import { NestFactory } from '@nestjs/core';
import AppModule from './app.module.js';
import { validationPipeConfig } from './config/validation-pipe.config.js';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './config/swagger.config.js';
import HttpExceptionFilter from './common/exceptions/http-exception.filter.js';

async function bootstrap() {

  // Config validators
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(validationPipeConfig));
  app.useGlobalFilters(new HttpExceptionFilter());

  //Doc swagger config
  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
