import EnderecoRequestDto from "./endereco-request.dto.js";
import VolumeRequestDto from "./volume-request.dto.js";
import { IsNotEmpty, IsString, MaxLength, IsDefined, ValidateNested, IsArray, ArrayNotEmpty, minLength, MinLength } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export default class EncomendaRequestDto {

    @ApiProperty({ example: '102962a0-1fd5-40b4-8357-3a1b76a0a216', description: 'Id do remetente' })
    @IsString()
    @IsNotEmpty()
    @MinLength(36)
    @MaxLength(36)
    public remetentePessoaId!: string;

    @ApiProperty({ example: '113a73b1-20e6-41c5-9468-4b3c87c1a201', description: 'Id do destinatário' })
    @IsString()
    @MinLength(36)
    @MaxLength(36)
    public destinatarioPessoaId!: string;

    @ApiProperty({ example: 'Eletrônicos', description: 'Descricação da encomenda' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    public descricao!: string;

    @ApiProperty({ description: 'Endereço de entrega' })
    @IsDefined()
    @ValidateNested()
    @Type(() => EnderecoRequestDto)
    public enderecoEntrega!: EnderecoRequestDto;

    @ApiProperty({ description: 'volumes da encomenda' })
    @ArrayNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => VolumeRequestDto)
    public volumes: VolumeRequestDto[] = new Array<VolumeRequestDto>();

    public addVolume(volume: VolumeRequestDto): void {
        this.volumes.push(volume);
    }
}
