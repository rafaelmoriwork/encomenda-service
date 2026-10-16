import { BadRequestException, Injectable, UnprocessableEntityException } from '@nestjs/common';
import EncomendaRequestDto from './dto/request/encomenda-request.dto.js';
import { Repository } from 'typeorm';
import { Cidade } from '../enderecos/entities/cidade.entity.js';
import { Encomenda } from './entities/encomenda.entity.js';
import { EncomendaStatusId } from './enums/encomenda-status-id.enum.js';
import { EncomendaStatus } from './entities/encomenda-status.entity.js';
import { Endereco } from '../enderecos/entities/endereco.entity.js';
import { Volume } from './entities/volume.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from '../pessoas/entities/pessoa.entity.js';

@Injectable()
export default class EncomendasService {

  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,

    @InjectRepository(Cidade)
    private readonly cidadeRepository: Repository<Cidade>,

    @InjectRepository(Encomenda)
    private readonly encomendaRepository: Repository<Encomenda>,

    @InjectRepository(EncomendaStatus)
    private readonly statusRepository: Repository<EncomendaStatus>,

    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,

    @InjectRepository(Volume)
    private readonly volumeRepository: Repository<Volume>,
  ) { }

  public async registrarEncomenda(encomendaRequestDto: EncomendaRequestDto): Promise<void> {

    const encomenda = await this.gerarEncomenda(encomendaRequestDto);
    await this.encomendaRepository.save(encomenda);
  }

  private async gerarEncomenda(encomendaRequestDto: EncomendaRequestDto): Promise<Encomenda> {

    const { remetente, destinatario, cidade } = await this.buscarDependenciasRegistroEncomenda(encomendaRequestDto);

    const encomenda = this.encomendaRepository.create({
      descricao: encomendaRequestDto.descricao,
      dataInclusao: new Date(),
    });

    const statusRecebida = this.statusRepository.create({
      id: EncomendaStatusId.RECEBIDA,
    });

    const endereco = this.enderecoRepository.create({
      ...encomendaRequestDto.enderecoEntrega,
    });

    encomenda.remetente = Promise.resolve(remetente);
    encomenda.destinatario = Promise.resolve(destinatario);
    encomenda.status = Promise.resolve(statusRecebida);
    endereco.cidade = Promise.resolve(cidade);
    encomenda.enderecoEntrega = Promise.resolve(endereco);

    encomenda.volumes = Promise.resolve(
      encomendaRequestDto.volumes.map(volume =>
        this.volumeRepository.create(volume),
      ),
    );

    return encomenda;
  }

  private async buscarDependenciasRegistroEncomenda(encomendaRequestDto: EncomendaRequestDto): Promise<{
    remetente: Pessoa;
    destinatario: Pessoa;
    cidade: Cidade;
  }> {

    const remetente = await this.pessoaRepository.findOneBy({ id: encomendaRequestDto.remetentePessoaId });
    if (!remetente) {
      throw new BadRequestException(`Remetente não encontrado: ${encomendaRequestDto.remetentePessoaId}`);
    }

    const destinatario = await this.pessoaRepository.findOneBy({ id: encomendaRequestDto.destinatarioPessoaId });
    if (!destinatario) {
      throw new BadRequestException(`Destinatário não encontrado: ${encomendaRequestDto.destinatarioPessoaId}`);
    }

    const cidade = await this.cidadeRepository.findOneBy({ id: encomendaRequestDto.enderecoEntrega.cidadeId });
    if (!cidade) {
      throw new BadRequestException(`Cidade não encontrada: ${encomendaRequestDto.enderecoEntrega.cidadeId}`);
    }

    return { remetente, destinatario, cidade };
  }

}
