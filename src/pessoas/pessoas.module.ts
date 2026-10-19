import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity.js';

@Module({
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
  imports: [TypeOrmModule.forFeature([Pessoa])],
})
export default class PessoasModule {}
