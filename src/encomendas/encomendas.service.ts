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
import EnderecosService from '../enderecos/enderecos.service.js';

@Injectable()
export default class EncomendasService {

  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,

    @InjectRepository(Encomenda)
    private readonly encomendaRepository: Repository<Encomenda>,

    @InjectRepository(EncomendaStatus)
    private readonly statusRepository: Repository<EncomendaStatus>,


    @InjectRepository(Volume)
    private readonly volumeRepository: Repository<Volume>,

    private readonly enderecosService: EnderecosService,
  ) { }

  public async registrarEncomenda(encomendaRequestDto: EncomendaRequestDto): Promise<void> {

    const encomenda = await this.gerarEncomenda(encomendaRequestDto);
    await this.encomendaRepository.save(encomenda);
  }

  private async gerarEncomenda(encomendaRequestDto: EncomendaRequestDto): Promise<Encomenda> {

    const { remetente, destinatario } = await this.buscarDependenciasRegistroEncomenda(encomendaRequestDto);

    const encomenda = this.encomendaRepository.create({
      descricao: encomendaRequestDto.descricao,
    });

    const statusRecebida = this.statusRepository.create({
      id: EncomendaStatusId.RECEBIDA,
    });

    const endereco = await this.enderecosService.gerarEnderecoEntrega(encomendaRequestDto.enderecoEntrega);

    encomenda.remetente = Promise.resolve(remetente);
    encomenda.destinatario = Promise.resolve(destinatario);
    encomenda.status = Promise.resolve(statusRecebida);
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
  }> {

    if (encomendaRequestDto.remetentePessoaId == encomendaRequestDto.destinatarioPessoaId) {
      throw new BadRequestException("Remetente e destinatário não podem ser a mesma pessoa.");
    }

    const remetente = await this.pessoaRepository.findOneBy({ id: encomendaRequestDto.remetentePessoaId });
    if (!remetente) {
      throw new BadRequestException(`Remetente não encontrado: ${encomendaRequestDto.remetentePessoaId}`);
    }

    const destinatario = await this.pessoaRepository.findOneBy({ id: encomendaRequestDto.destinatarioPessoaId });
    if (!destinatario) {
      throw new BadRequestException(`Destinatário não encontrado: ${encomendaRequestDto.destinatarioPessoaId}`);
    }

    return { remetente, destinatario };
  }

}
