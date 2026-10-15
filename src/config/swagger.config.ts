import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
    .setTitle('Encomenda Service')
    .setDescription('API de gerenciamento de encomendas')
    .setVersion('1.0')
    .build();