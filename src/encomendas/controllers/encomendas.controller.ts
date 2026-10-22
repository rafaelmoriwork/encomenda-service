import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  SerializeOptions,
  Param,
} from '@nestjs/common';
import EncomendasService from '../services/encomendas.service.js';
import EncomendaRequestDto from '../dto/request/encomenda-request.dto.js';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import ConsultaEncomendasRequestDto from '../dto/request/consulta-encomendas-request.dto.js';
import ConsultaEncomendasResponseDto from '../dto/response/consulta-encomendas-response.dto.js';
import EncomendaResponseDto from '../dto/response/encomenda-response-dto.js';

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

  @Get(':id')
  @SerializeOptions({ type: EncomendaResponseDto })
  @ApiOperation({
    summary:
      'Permitir localizar e consultar uma encomenda para acompanhamento operacional',
  })
  @ApiResponse({ status: 200, description: 'Resultado da busca' })
  @ApiResponse({ status: 400, description: 'Encomenda não encontrada' })
  @ApiParam({
    name: 'id',
    description: 'ID da encomenda',
    example: '02416e45-dba5-43d3-af2a-a27007c7e4aa',
  })
  public async consultarEncomendaPorId(@Param('id') id: string) {
    return await this.encomendasService.buscarEncomendaPorId(id);
  }
}
