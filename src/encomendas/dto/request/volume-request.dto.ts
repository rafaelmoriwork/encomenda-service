import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsDecimal, IsString, MaxLength, IsNumber } from "class-validator";

export default class VolumeRequestDto {

    @ApiProperty({ example: '10.212', description: 'Peso bruto' })
    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 3})
    public pesoBruto: number;

    @ApiProperty({ example: '55.322', description: 'Comprimento' })
    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 3})
    public comprimento: number;

    @ApiProperty({ example: '44.322', description: 'Largura' })
    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 3})
    public largura: number;

    @ApiProperty({ example: '11.433', description: 'Altura' })
    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 3})
    public altura: number;

    @ApiProperty({ example: 'Caixa', description: 'Descricação da encomenda' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    public descricao!: string;
}