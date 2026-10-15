import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export default class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        const status = exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;

        response.status(status).json({
            statusCode: status,
            messages: this.extrairMensagens(exception),
        });
    }

    private extrairMensagens(exception: unknown): string[] {

        const mensagemPadrao = 'Erro interno do servidor';

        if (!(exception instanceof HttpException)) {
            return [mensagemPadrao];
        }

        const resposta = exception.getResponse();
        const mensagem = typeof resposta === 'object' ? (resposta as { message?: unknown }).message : resposta;

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