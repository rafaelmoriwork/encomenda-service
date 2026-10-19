import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Endereco } from '../entities/endereco.entity.js';

@Injectable()
export class EnderecosRepository extends Repository<Endereco> {
  constructor(dataSource: DataSource) {
    super(Endereco, dataSource.createEntityManager());
  }

  public buscarPorEnderecoCompleto(
    bairro: string,
    logradouro: string,
    numero: string,
    cep: string,
    cidadeId: string,
  ): Promise<Endereco | null> {
    return this.createQueryBuilder('e')
      .innerJoin('e.cidade', 'c')
      .where('LOWER(e.cep) = LOWER(:cep)', { cep })
      .andWhere('LOWER(e.numero) = LOWER(:numero)', { numero })
      .andWhere('LOWER(e.bairro) = LOWER(:bairro)', { bairro })
      .andWhere('LOWER(e.logradouro) = LOWER(:logradouro)', { logradouro })
      .andWhere('c.id = :cidadeId', { cidadeId })
      .getOne();
  }
}
