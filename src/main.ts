import { NestFactory, Reflector } from '@nestjs/core';
import AppModule from './app.module.js';
import { GlobalValidationPipe } from './common/pipes/global-validation.pipe.js';
import { SwaggerSetup } from './common/swagger/swagger.setup.js';
import { GlobalSerializerInterceptor } from './common/interceptors/global-serializer.interceptor.js';

async function bootstrap() {
  // Config validators
  const app = await NestFactory.create(AppModule);

  //Config global dos pipes
  app.useGlobalPipes(new GlobalValidationPipe());

  //Config global para o serializador
  app.useGlobalInterceptors(
    new GlobalSerializerInterceptor(app.get(Reflector)),
  );

  //Doc swagger config
  new SwaggerSetup().setup(app);

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
