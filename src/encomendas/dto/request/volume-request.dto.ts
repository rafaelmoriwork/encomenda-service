import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsDecimal } from "class-validator";

export default class VolumeRequestDto {

    @ApiProperty({ example: '10.2', description: 'Peso bruto' })
    @IsNotEmpty()
    @IsDecimal({ decimal_digits: '1,2', force_decimal: true })
    public pesoBruto: number;

    @ApiProperty({ example: '55.33', description: 'Comprimento' })
    @IsNotEmpty()
    @IsDecimal({ decimal_digits: '1,2', force_decimal: true })
    public comprimento: number;

    @ApiProperty({ example: '44.30', description: 'Largura' })
    @IsNotEmpty()
    @IsDecimal({ decimal_digits: '1,2', force_decimal: true })
    public largura: number;

    @ApiProperty({ example: '11.40', description: 'Altura' })
    @IsNotEmpty()
    @IsDecimal({ decimal_digits: '1,2', force_decimal: true })
    public altura: number;
}