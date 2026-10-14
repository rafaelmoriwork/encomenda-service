import { Module } from '@nestjs/common';
import { Documento } from './entities/documento.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity.js';
import { TipoDocumento } from './entities/tipo-documento.entity.js';
import { TipoPessoa } from './entities/tipo-pessoa.entity.js';

@Module({
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
  imports: [
    TypeOrmModule.forFeature([
      Documento,
      Pessoa,
      TipoDocumento,
      TipoPessoa
    ]),
  ],
})
export default class PessoasModule { }
