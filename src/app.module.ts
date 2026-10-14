import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import EncomendasModule from './encomendas/encomendas.module.js';
import PessoasModule from './pessoas/pessoas.module.js';
import EnderecosModule from './enderecos/enderecos.module.js';
import { databaseOptions } from './config/database.config.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(databaseOptions),
    EncomendasModule, 
    PessoasModule, 
    EnderecosModule
  ],
  controllers: [],
  providers: [],
})
export default class AppModule { }
