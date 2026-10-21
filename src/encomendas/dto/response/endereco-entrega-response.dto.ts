import { Expose, plainToInstance } from 'class-transformer';
import { Endereco } from '../../../enderecos/entities/endereco.entity.js';
import { ApiProperty } from '@nestjs/swagger';

export default class EnderecoEntregaResponseDto {
  @Expose()
  @ApiProperty({
    description: 'Nome da cidade',
  })
  public cidade?: string;

  @Expose()
  @ApiProperty({
    description: 'UF da cidade',
  })
  public uf?: string;

  @Expose()
  @ApiProperty({
    description: 'CEP',
  })
  public cep: string;

  @Expose()
  @ApiProperty({
    description: 'Logradouro',
  })
  public logradouro: string;

  @Expose()
  @ApiProperty({
    description: 'Bairro',
  })
  public bairro: string;

  @Expose()
  @ApiProperty({
    description: 'Número',
  })
  public numero: string;

  public static from(endereco?: Endereco): EnderecoEntregaResponseDto {
    const enderecoEntregaResponseDto = plainToInstance(
      EnderecoEntregaResponseDto,
      endereco,
      { excludeExtraneousValues: true },
    );

    if (endereco) {
      enderecoEntregaResponseDto.cidade = endereco.cidade?.nome;
      enderecoEntregaResponseDto.uf = endereco.cidade?.estado?.uf;
    }

    return enderecoEntregaResponseDto;
  }
}
