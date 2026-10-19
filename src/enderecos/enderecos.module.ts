import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cidade } from './entities/cidade.entity.js';
import { Endereco } from './entities/endereco.entity.js';
import { Estado } from './entities/estado.entity.js';
import EnderecosService from './enderecos.service.js';
import { EnderecosRepository } from './repositories/enderecos.repository.js';

@Module({
  controllers: [],
  providers: [EnderecosService, EnderecosRepository],
  exports: [TypeOrmModule, EnderecosService],
  imports: [TypeOrmModule.forFeature([Cidade, Endereco, Estado])],
})
export default class EnderecosModule {}
