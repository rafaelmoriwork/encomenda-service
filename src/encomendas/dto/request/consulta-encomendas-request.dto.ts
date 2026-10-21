import { IsOptional } from 'class-validator';

export default class ConsultaEncomendasRequestDto {
  @IsOptional()
  public statusId: string | null = null;
}
