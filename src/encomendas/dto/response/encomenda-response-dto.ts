import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import EnderecoEntregaResponseDto from './endereco-entrega-response.dto.js';
import PessoaResponseDto from './pessoa-response.dto.js';
import VolumeResponseDto from './volume-response.dto.js';
import { Encomenda } from '../../entities/encomenda.entity.js';

export default class EncomendaResponseDto {
  @Expose()
  @ApiProperty({
    description: 'Id da encomenda',
  })
  public id!: string;

  @Expose()
  @ApiProperty({
    description: 'Status da encomenda',
  })
  public status: string;

  @Expose()
  @ApiProperty({
    description: 'Remetente',
  })
  @Type(() => PessoaResponseDto)
  public remetente: PessoaResponseDto;

  @Expose()
  @ApiProperty({
    description: 'Destinatario',
  })
  @Type(() => PessoaResponseDto)
  public destinatario: PessoaResponseDto;

  @Expose()
  @ApiProperty({
    description: 'Descrição da encomenda',
  })
  public descricao!: string;

  @Expose()
  @ApiProperty({
    description: 'Data de recebimento da encomenda',
  })
  public dataInclusao!: Date;

  @Expose()
  @ApiProperty({
    description: 'Endereco de entrega',
  })
  @Type(() => EnderecoEntregaResponseDto)
  public enderecoEntrega!: EnderecoEntregaResponseDto;

  @Expose()
  @ApiProperty({
    description: 'Volumes',
    type: () => [VolumeResponseDto],
  })
  @Type(() => VolumeResponseDto)
  public volumes: VolumeResponseDto[] = new Array<VolumeResponseDto>();

  public static from(encomenda: Encomenda): EncomendaResponseDto {
    const encomendaResponseDto = plainToInstance(
      EncomendaResponseDto,
      encomenda,
      { excludeExtraneousValues: true },
    );

    if (encomenda.status) {
      encomendaResponseDto.status = encomenda.status?.descricao;
    }

    encomendaResponseDto.remetente = PessoaResponseDto.from(
      encomenda.remetente,
    );
    encomendaResponseDto.destinatario = PessoaResponseDto.from(
      encomenda.destinatario,
    );
    encomendaResponseDto.enderecoEntrega = EnderecoEntregaResponseDto.from(
      encomenda.enderecoEntrega,
    );

    if (encomenda.volumes) {
      encomendaResponseDto.volumes = encomenda.volumes?.map((volume) =>
        VolumeResponseDto.from(volume),
      );
    }

    return encomendaResponseDto;
  }
}
