import { Expose, plainToInstance, Type } from 'class-transformer';
import EncomendaResponseDto from './encomenda-response-dto.js';
import { ApiProperty } from '@nestjs/swagger';
import { Encomenda } from '../../entities/encomenda.entity.js';

export default class ConsultaEncomendasResponseDto {
  @Expose()
  @ApiProperty({
    description: 'Listagem de encomendas',
  })
  @Type(() => EncomendaResponseDto)
  public encomendas: EncomendaResponseDto[] = new Array<EncomendaResponseDto>();

  public static from(encomendas: Encomenda[]): ConsultaEncomendasResponseDto {
    const encomendasDto: EncomendaResponseDto[] = encomendas.map((encomenda) =>
      EncomendaResponseDto.from(encomenda),
    );

    return plainToInstance(
      ConsultaEncomendasResponseDto,
      { encomendas: encomendasDto },
      { excludeExtraneousValues: true },
    );
  }
}
