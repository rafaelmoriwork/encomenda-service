import {
  Controller,
  Post,
  Body,
  Get,
  ClassSerializerInterceptor,
  UseInterceptors,
  Query,
  SerializeOptions,
} from '@nestjs/common';
import EncomendasService from '../services/encomendas.service.js';
import EncomendaRequestDto from '../dto/request/encomenda-request.dto.js';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import ConsultaEncomendasRequestDto from '../dto/request/consulta-encomendas-request.dto.js';
import ConsultaEncomendasResponseDto from '../dto/response/consulta-encomendas-response.dto.js';

@Controller('encomendas')
export default class EncomendasController {
  private readonly encomendasService: EncomendasService;

  constructor(encomendasService: EncomendasService) {
    this.encomendasService = encomendasService;
  }

  @Post()
  @ApiOperation({ summary: 'Registra uma nova encomenda' })
  @ApiResponse({ status: 201, description: 'Encomenda registrada' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  public async registrarEncomenda(
    @Body() encomendaRequestDto: EncomendaRequestDto,
  ): Promise<void> {
    await this.encomendasService.registrarEncomenda(encomendaRequestDto);
  }

  @Get()
  @SerializeOptions({ type: ConsultaEncomendasResponseDto })
  @ApiOperation({
    summary:
      'Permitir localizar e consultar encomendas para acompanhamento operacional',
  })
  @ApiResponse({
    status: 200,
    description: 'Resultado da busca',
    type: ConsultaEncomendasResponseDto,
  })
  public async consultarEncomendas(
    @Query() consultaEncomendasRequestDto: ConsultaEncomendasRequestDto,
  ) {
    return await this.encomendasService.consultarEncomendas(
      consultaEncomendasRequestDto,
    );
  }
}
