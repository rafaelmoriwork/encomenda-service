import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToInstance } from 'class-transformer';
import { Volume } from '../../entities/volume.entity.js';

export default class VolumeResponseDto {
  @Expose()
  @ApiProperty({
    description: 'Comprimento',
  })
  public comprimento!: number;

  @Expose()
  @ApiProperty({
    description: 'Largura',
  })
  public largura!: number;

  @Expose()
  @ApiProperty({
    description: 'Altura',
  })
  public altura!: number;

  @Expose()
  @ApiProperty({
    description: 'Peso Bruto',
  })
  public pesoBruto!: number;

  @Expose()
  @ApiProperty({
    description: 'Descrição',
  })
  public descricao!: string;

  public static from(volume: Volume): VolumeResponseDto {
    return plainToInstance(VolumeResponseDto, volume, {
      excludeExtraneousValues: true,
    });
  }
}
