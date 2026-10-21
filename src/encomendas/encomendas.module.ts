import { Module } from '@nestjs/common';
import EncomendasController from './controllers/encomendas.controller.js';
import EncomendasService from './services/encomendas.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncomendaStatus } from './entities/encomenda-status.entity.js';
import { Encomenda } from './entities/encomenda.entity.js';
import { Volume } from './entities/volume.entity.js';
import EnderecosModule from '../enderecos/enderecos.module.js';
import PessoasModule from '../pessoas/pessoas.module.js';

@Module({
  controllers: [EncomendasController],
  providers: [EncomendasService],
  exports: [TypeOrmModule],
  imports: [
    TypeOrmModule.forFeature([EncomendaStatus, Encomenda, Volume]),
    PessoasModule,
    EnderecosModule,
  ],
})
export default class EncomendasModule {}
