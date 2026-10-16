import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export default class EnderecoRequestDto {

    @ApiProperty({ example: '5106f95c-a4ca-4265-96d5-8fa459410f90', description: 'Id da cidade' })
    @IsString()
    @IsNotEmpty()
    @MinLength(36)
    @MaxLength(36)
    public cidadeId: string;

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