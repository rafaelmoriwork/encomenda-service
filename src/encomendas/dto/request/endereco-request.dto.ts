import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export default class EnderecoRequestDto {
  @ApiProperty({
    example: '5106f95c-a4ca-4265-96d5-8fa459410f90',
    description: 'Id da cidade',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(36)
  @MaxLength(36)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  public cidadeId: string;

  @ApiProperty({
    example: 'Sargento Antônio Esteves',
    description: 'Logradouro',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  public logradouro: string;

  @ApiProperty({ example: 'Parque Brasil', description: 'Bairro' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  public bairro: string;

  @ApiProperty({ example: '55', description: 'Número' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  public numero: string;

  @ApiProperty({ example: '12906299', description: 'CEP' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(8)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  public cep: string;
}
