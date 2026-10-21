import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity.js';
import PessoasService from './services/pessoas.service.js';

@Module({
  controllers: [],
  providers: [PessoasService],
  exports: [TypeOrmModule, PessoasService],
  imports: [TypeOrmModule.forFeature([Pessoa])],
})
export default class PessoasModule {}
