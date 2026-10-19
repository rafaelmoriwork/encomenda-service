import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsDecimal,
  IsString,
  MaxLength,
  IsNumber,
  IsPositive,
  Min,
} from 'class-validator';

export default class VolumeRequestDto {
  @ApiProperty({ example: 10.21, description: 'Peso bruto em kg' })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @Min(0.1)
  public pesoBruto: number;

  @ApiProperty({ example: 55.32, description: 'Comprimento em cm' })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @Min(0.1)
  public comprimento: number;

  @ApiProperty({ example: 44.32, description: 'Largura em cm' })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @Min(0.1)
  public largura: number;

  @ApiProperty({ example: 11.43, description: 'Altura em cm' })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @Min(0.1)
  public altura: number;

  @ApiProperty({ example: 'Caixa', description: 'Descrição do volume' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  public descricao!: string;
}
