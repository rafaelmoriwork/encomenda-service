import EnderecoRequestDto from "./endereco-request.dto.js";
import VolumeRequestDto from "./volume-request.dto.js";
import { IsNotEmpty, IsString, MaxLength, IsDefined, ValidateNested, IsArray, ArrayNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export default class EncomendaRequestDto {

    @ApiProperty({ example: '33201309899', description: 'Documento do remetente' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    public docRemetente!: string;

    @ApiProperty({ example: '44201309899', description: 'Documento do destinatário' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    public docDestinatario!: string;

    @ApiProperty({ example: 'Caixa', description: 'Descricação da encomenda' })
    @IsString()
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
