import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export default class EnderecoRequestDto {

    @ApiProperty({ example: '3507605', description: 'Código IBGE da cidade de entrega' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(7)
    @MinLength(7)
    public codigoIbgeCidade: string;

    @ApiProperty({ example: 'Sargento Antônio Esteves', description: 'Logradouro' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    public logradouro: string;

    @ApiProperty({ example: 'Parque Brasil', description: 'Bairro' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    public bairro: string;

    @ApiProperty({ example: '55', description: 'Número' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    public numero: string;

    @ApiProperty({ example: '12906299', description: 'CEP' })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(8)
    public cep: string;
}