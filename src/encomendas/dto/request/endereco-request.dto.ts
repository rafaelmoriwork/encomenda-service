import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export default class EnderecoRequestDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(7)
    @MinLength(7)
    public codigoIbgeCidade: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    public logradouro: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    public bairro: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    public numero: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(8)
    public cep: string;
}