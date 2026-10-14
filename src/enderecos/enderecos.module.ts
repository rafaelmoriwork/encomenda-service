import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cidade } from './entities/cidade.entity.js';
import { Endereco } from './entities/endereco.entity.js';
import { Estado } from './entities/estado.entity.js';

@Module({
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
  imports: [
    TypeOrmModule.forFeature([
      Cidade,
      Endereco,
      Estado
    ]),
  ],
})
export default class EnderecosModule { }
