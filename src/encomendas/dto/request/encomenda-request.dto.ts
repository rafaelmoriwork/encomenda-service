import EnderecoRequestDto from "./endereco-request.dto.js";
import VolumeRequestDto from "./volume-request.dto.js";
import { IsNotEmpty, IsString, MaxLength, IsDefined, ValidateNested, IsArray, ArrayNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export default class EncomendaRequestDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    public docRemetente!: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    public docDestinatario!: string;

    @IsString()
    @MaxLength(200)
    public descricao!: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => EnderecoRequestDto)
    public enderecoEntrega!: EnderecoRequestDto;

    @ArrayNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => VolumeRequestDto)
    public volumes: VolumeRequestDto[] = new Array<VolumeRequestDto>();

    public addVolume(volume: VolumeRequestDto): void {
        this.volumes.push(volume);
    }
}
