import { Controller, Post, Body } from '@nestjs/common';
import EncomendasService from './encomendas.service.js';
import EncomendaRequestDto from './dto/request/encomenda-request.dto.js';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

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
  public async registrarEncomenda(@Body() encomendaRequestDto: EncomendaRequestDto): Promise<void> {
    await this.encomendasService.registrarEncomenda(encomendaRequestDto);
  }

}
