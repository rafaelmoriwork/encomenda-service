import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerSetup {
  private readonly path = 'docs';

  private readonly config = new DocumentBuilder()
    .setTitle('Encomenda Service')
    .setDescription('API de gerenciamento de encomendas')
    .setVersion('1.0')
    .build();

  public setup(app: INestApplication): void {
    const documentFactory = () =>
      SwaggerModule.createDocument(app, this.config);
    SwaggerModule.setup(this.path, app, documentFactory);
  }
}
