import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from '../entities/pessoa.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export default class PessoasService {
  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {}

  public async buscarPessoaPorId(id: string): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOneBy({
      id: id,
    });
    if (!pessoa) {
      throw new BadRequestException(`Pessoa não encontrada: ${id}`);
    }

    return pessoa;
  }
}
