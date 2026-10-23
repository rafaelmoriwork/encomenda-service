import { UnprocessableEntityException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

export default class PaginacaoResponseDto {
  @Expose()
  @ApiProperty({
    description: 'Total de registros',
    example: 17,
  })
  @Transform(({ value }) => Number(value))
  public totalRegistros: number;

  @Expose()
  @ApiProperty({
    description: 'Total de páginas',
    example: 6,
  })
  @Transform(({ value }) => Number(value))
  public totalPaginas: number;

  @Expose()
  @ApiProperty({
    description: 'Total de itens por página',
    example: 3,
  })
  @Transform(({ value }) => Number(value))
  public itensPorPagina: number;

  @Expose()
  @ApiProperty({
    description: 'Página atual',
    example: 1,
  })
  @Transform(({ value }) => Number(value))
  public paginaAtual: number;

  @Expose()
  @ApiProperty({
    description: 'Página anterior',
    example: null,
  })
  @Transform(({ value }) => (value == null ? null : Number(value)))
  public paginaAnterior: number | null;

  @Expose()
  @ApiProperty({
    description: 'Proxima página',
    example: 2,
  })
  @Transform(({ value }) => (value == null ? null : Number(value)))
  public proximaPagina: number | null;

  protected static gerarPaginacao(
    totalRegistros: number,
    paginaAtual: number,
    itensPorPagina: number,
  ): PaginacaoResponseDto {
    const totalPaginas = Math.ceil(totalRegistros / itensPorPagina);

    const paginacao = new PaginacaoResponseDto();
    paginacao.totalRegistros = totalRegistros;
    paginacao.totalPaginas = totalPaginas;
    paginacao.itensPorPagina = itensPorPagina;
    paginacao.paginaAtual = paginaAtual;
    paginacao.paginaAnterior = paginaAtual > 1 ? paginaAtual - 1 : null;
    paginacao.proximaPagina =
      paginaAtual < totalPaginas ? paginaAtual + 1 : null;

    if (paginaAtual > paginacao.totalPaginas) {
      throw new UnprocessableEntityException(
        'Página inválida, a página atual não pode ser maior que o total de páginas',
      );
    }

    return paginacao;
  }
}
