import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import EncomendasModule from './encomendas/encomendas.module.js';
import PessoasModule from './pessoas/pessoas.module.js';
import EnderecosModule from './enderecos/enderecos.module.js';
import DatabaseModule from './database/database.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    EncomendasModule,
    PessoasModule,
    EnderecosModule,
  ],
  controllers: [],
  providers: [],
})
export default class AppModule {}
