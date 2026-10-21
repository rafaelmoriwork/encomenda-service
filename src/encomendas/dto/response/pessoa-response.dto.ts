import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToInstance } from 'class-transformer';
import { Pessoa } from '../../../pessoas/entities/pessoa.entity.js';

export default class PessoaResponseDto {
  @Expose()
  @ApiProperty({
    description: 'ID',
  })
  public id: string;

  @Expose()
  @ApiProperty({
    description: 'Nome',
  })
  public nome: string;

  public static from(pessoa?: Pessoa): PessoaResponseDto {
    return plainToInstance(PessoaResponseDto, pessoa, {
      excludeExtraneousValues: true,
    });
  }
}
