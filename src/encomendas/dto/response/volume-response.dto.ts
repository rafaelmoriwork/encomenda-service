import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToInstance, Transform } from 'class-transformer';
import { Volume } from '../../entities/volume.entity.js';

export default class VolumeResponseDto {
  @Expose()
  @ApiProperty({
    description: 'Comprimento',
  })
  @Transform(({ value }) => Number(value))
  public comprimento!: number;

  @Expose()
  @ApiProperty({
    description: 'Largura',
  })
  @Transform(({ value }) => Number(value))
  public largura!: number;

  @Expose()
  @ApiProperty({
    description: 'Altura',
  })
  @Transform(({ value }) => Number(value))
  public altura!: number;

  @Expose()
  @ApiProperty({
    description: 'Peso Bruto',
  })
  @Transform(({ value }) => Number(value))
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
