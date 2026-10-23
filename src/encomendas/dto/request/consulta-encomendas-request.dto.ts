import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import PaginacaoRequestDto from '../../../common/dto/request/paginacao-request.dto.js';

export default class ConsultaEncomendasRequestDto extends PaginacaoRequestDto {
  @ApiPropertyOptional({
    type: String,
    example: 'd822047b-681f-4607-8fb4-b64465343fa3',
    description: 'Id do status para filtrar',
  })
  @IsOptional()
  public statusId: string | null = null;
}
