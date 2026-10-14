import { Controller, Post, Body } from '@nestjs/common';
import EncomendasService from './encomendas.service.js';
import EncomendaRequestDto from './dto/request/encomenda-request.dto.js';

@Controller('encomendas')
export default class EncomendasController {

  private readonly encomendasService: EncomendasService;

  constructor(encomendasService: EncomendasService) {
    this.encomendasService = encomendasService;
  }

  @Post()
  public async registrarEncomenda(@Body() encomendaRequestDto: EncomendaRequestDto): Promise<void> {
    await this.encomendasService.registrarEncomenda(encomendaRequestDto);
  }

}
