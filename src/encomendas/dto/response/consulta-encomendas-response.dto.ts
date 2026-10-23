import { Expose, plainToInstance, Type } from 'class-transformer';
import EncomendaResponseDto from './encomenda-response-dto.js';
import { ApiProperty } from '@nestjs/swagger';
import { Encomenda } from '../../entities/encomenda.entity.js';
import PaginacaoResponseDto from '../../../common/dto/response/paginacao-response.dto.js';

export default class ConsultaEncomendasResponseDto extends PaginacaoResponseDto {
  @Expose()
  @ApiProperty({
    description: 'Listagem de encomendas',
    type: () => [EncomendaResponseDto],
  })
  @Type(() => EncomendaResponseDto)
  public encomendas: EncomendaResponseDto[] = new Array<EncomendaResponseDto>();

  public static from(
    encomendas: Encomenda[],
    totalRegistros: number,
    paginaAtual: number,
    itensPorPagina: number,
  ): ConsultaEncomendasResponseDto {
    const paginacao = PaginacaoResponseDto.gerarPaginacao(
      totalRegistros,
      paginaAtual,
      itensPorPagina,
    );

    const encomendasDto: EncomendaResponseDto[] = encomendas.map((encomenda) =>
      EncomendaResponseDto.from(encomenda),
    );

    return plainToInstance(
      ConsultaEncomendasResponseDto,
      { ...paginacao, encomendas: encomendasDto },
      { excludeExtraneousValues: true },
    );
  }
}
