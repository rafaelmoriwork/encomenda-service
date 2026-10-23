import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsPositive, Max, Min } from 'class-validator';

export default class PaginacaoRequestDto {
  @ApiProperty({ example: 1, description: 'Pagina atual' })
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @Min(1)
  @IsNotEmpty()
  public paginaAtual: number;

  @ApiProperty({ example: 10, description: 'Total de itens por página' })
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(100)
  @IsNotEmpty()
  public itensPorPagina: number;

  @Exclude({ toClassOnly: true })
  public get skip(): number {
    return (this.paginaAtual - 1) * this.itensPorPagina;
  }
}
