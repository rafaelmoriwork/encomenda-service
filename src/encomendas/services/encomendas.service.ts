import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import EncomendaRequestDto from '../dto/request/encomenda-request.dto.js';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Encomenda } from '../entities/encomenda.entity.js';
import { EncomendaStatusId } from '../enums/encomenda-status-id.enum.js';
import { EncomendaStatus } from '../entities/encomenda-status.entity.js';
import { Endereco } from '../../enderecos/entities/endereco.entity.js';
import { Volume } from '../entities/volume.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity.js';
import EnderecosService from '../../enderecos/enderecos.service.js';
import ConsultaEncomendasResponseDto from '../dto/response/consulta-encomendas-response.dto.js';
import ConsultaEncomendasRequestDto from '../dto/request/consulta-encomendas-request.dto.js';
import PessoasService from '../../pessoas/services/pessoas.service.js';
import EncomendaResponseDto from '../dto/response/encomenda-response-dto.js';

@Injectable()
export default class EncomendasService {
  constructor(
    @InjectRepository(Encomenda)
    private readonly encomendaRepository: Repository<Encomenda>,

    @InjectRepository(EncomendaStatus)
    private readonly statusRepository: Repository<EncomendaStatus>,

    @InjectRepository(Volume)
    private readonly volumeRepository: Repository<Volume>,

    private readonly enderecosService: EnderecosService,
    private readonly pessoasService: PessoasService,
  ) {}

  public async registrarEncomenda(
    encomendaRequestDto: EncomendaRequestDto,
  ): Promise<void> {
    const encomenda = await this.gerarEncomenda(encomendaRequestDto);
    await this.encomendaRepository.save(encomenda);
  }

  private async gerarEncomenda(
    encomendaRequestDto: EncomendaRequestDto,
  ): Promise<Encomenda> {
    const { remetente, destinatario, enderecoEntrega } =
      await this.buscarDependenciasRegistroEncomenda(encomendaRequestDto);

    const statusRecebida = this.statusRepository.create({
      id: EncomendaStatusId.RECEBIDA,
    });

    const encomenda = this.encomendaRepository.create({
      descricao: encomendaRequestDto.descricao,
      remetente: remetente,
      destinatario: destinatario,
      status: statusRecebida,
      enderecoEntrega: enderecoEntrega,
    });

    encomenda.volumes = encomendaRequestDto.volumes.map((volume) =>
      this.volumeRepository.create(volume),
    );

    return encomenda;
  }

  private async buscarDependenciasRegistroEncomenda(
    encomendaRequestDto: EncomendaRequestDto,
  ): Promise<{
    remetente: Pessoa;
    destinatario: Pessoa;
    enderecoEntrega: Endereco;
  }> {
    if (
      encomendaRequestDto.remetentePessoaId ==
      encomendaRequestDto.destinatarioPessoaId
    ) {
      throw new UnprocessableEntityException(
        'Remetente e destinatário não podem ser a mesma pessoa.',
      );
    }

    const remetente = await this.pessoasService.buscarPessoaPorId(
      encomendaRequestDto.remetentePessoaId,
    );
    const destinatario = await this.pessoasService.buscarPessoaPorId(
      encomendaRequestDto.destinatarioPessoaId,
    );

    const enderecoEntrega = await this.enderecosService.gerarEnderecoEntrega(
      encomendaRequestDto.enderecoEntrega,
    );

    return { remetente, destinatario, enderecoEntrega };
  }

  public async consultarEncomendas(
    consultaEncomendasRequestDto: ConsultaEncomendasRequestDto,
  ): Promise<ConsultaEncomendasResponseDto> {
    const whereFilters: FindOptionsWhere<Encomenda> = {};

    if (consultaEncomendasRequestDto.statusId != null) {
      whereFilters.status = await this.buscarStatusEncomendaPorIdStatus(
        consultaEncomendasRequestDto.statusId,
      );
    }

    const encomendas = await this.encomendaRepository.find({
      where: whereFilters,
      order: { dataInclusao: 'DESC' },
      relations: {
        status: true,
        remetente: true,
        destinatario: true,
        enderecoEntrega: {
          cidade: {
            estado: true,
          },
        },
        volumes: true,
      },
    });

    return ConsultaEncomendasResponseDto.from(encomendas);
  }

  private async buscarStatusEncomendaPorIdStatus(id: string) {
    const statusConsulta = await this.statusRepository.findOneBy({
      id: id,
    });

    if (!statusConsulta) {
      throw new NotFoundException(`Status não encontrado para o ID: ${id}`);
    }

    return statusConsulta;
  }

  public async buscarEncomendaPorId(id: string): Promise<EncomendaResponseDto> {
    const encomenda = await this.encomendaRepository.findOne({
      where: { id: id },
      relations: {
        status: true,
        remetente: true,
        destinatario: true,
        enderecoEntrega: {
          cidade: {
            estado: true,
          },
        },
        volumes: true,
      },
    });

    if (!encomenda) {
      throw new NotFoundException(`Encomenda não encontrada para o ID: ${id}`);
    }

    return EncomendaResponseDto.from(encomenda);
  }
}
