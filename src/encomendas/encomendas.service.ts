import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import EncomendaRequestDto from './dto/request/encomenda-request.dto.js';
import { Repository } from 'typeorm';
import { Documento } from '../pessoas/entities/documento.entity.js';
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
    @InjectRepository(Documento)
    private readonly documentoRepository: Repository<Documento>,

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

    const remetenteDocumento = await this.documentoRepository.findOneBy({ numero: encomendaRequestDto.docRemetente });
    if (!remetenteDocumento) {
      throw new UnprocessableEntityException(`Documento do remetente não encontrado: ${encomendaRequestDto.docRemetente}`);
    }

    const destinatarioDocumento = await this.documentoRepository.findOneBy({ numero: encomendaRequestDto.docDestinatario });
    if (!destinatarioDocumento) {
      throw new UnprocessableEntityException(`Documento do destinatário não encontrado: ${encomendaRequestDto.docDestinatario}`);
    }

    const cidade = await this.cidadeRepository.findOneBy({ codigoIbge: encomendaRequestDto.enderecoEntrega.codigoIbgeCidade });
    if (!cidade) {
      throw new UnprocessableEntityException(`Cidade não encontrada: ${encomendaRequestDto.enderecoEntrega.codigoIbgeCidade}`);
    }

    const [remetente, destinatario] = await Promise.all([
      remetenteDocumento.pessoa,
      destinatarioDocumento.pessoa,
    ]);

    return { remetente, destinatario, cidade };
  }

}
