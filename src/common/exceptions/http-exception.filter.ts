import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export default class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      messages: this.extrairMensagens(exception),
    });
  }

  private extrairMensagens(exception: HttpException): string[] {
    const mensagemPadrao = 'Erro interno do servidor';

    const resposta = exception.getResponse();
    const mensagem =
      typeof resposta === 'object'
        ? (resposta as { message?: unknown }).message
        : resposta;

    if (typeof mensagem === 'string') {
      return [mensagem];
    }

    if (Array.isArray(mensagem)) {
      return mensagem;
    }

    if (mensagem && typeof mensagem === 'object') {
      return Object.values(mensagem).flat() as string[];
    }

    return [mensagemPadrao];
  }
}
