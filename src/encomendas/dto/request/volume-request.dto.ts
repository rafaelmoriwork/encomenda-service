import { IsNotEmpty, IsDecimal } from "class-validator";

export default class VolumeRequestDto {

    @IsNotEmpty()
    @IsDecimal({ decimal_digits: '1,2', force_decimal: true })
    public pesoBruto: number;

    @IsNotEmpty()
    @IsDecimal({ decimal_digits: '1,2', force_decimal: true })
    public comprimento: number;

    @IsNotEmpty()
    @IsDecimal({ decimal_digits: '1,2', force_decimal: true })
    public largura: number;

    @IsNotEmpty()
    @IsDecimal({ decimal_digits: '1,2', force_decimal: true })
    public altura: number;
}