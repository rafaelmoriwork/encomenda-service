import { Repository } from "typeorm";
import { Endereco } from "./entities/endereco.entity.js";
import { InjectRepository } from "@nestjs/typeorm";
import { BadRequestException, Injectable } from "@nestjs/common";
import EnderecoRequestDto from "../encomendas/dto/request/endereco-request.dto.js";
import { Cidade } from "./entities/cidade.entity.js";
import { EnderecosRepository } from "./repositories/enderecos.repository.js";

@Injectable()
export default class EnderecosService {

    constructor(
        private readonly enderecosRepository: EnderecosRepository,

        @InjectRepository(Cidade)
        private readonly cidadeRepository: Repository<Cidade>,
    ) { }

    public async gerarEnderecoEntrega(enderecoRequestDto: EnderecoRequestDto): Promise<Endereco> {

        let endereco = await this.enderecosRepository.buscarPorEnderecoCompleto(
            enderecoRequestDto.bairro,
            enderecoRequestDto.logradouro,
            enderecoRequestDto.numero,
            enderecoRequestDto.cep,
            enderecoRequestDto.cidadeId
        );

        if (endereco != null) {
            return endereco;
        }

        const cidade = await this.cidadeRepository.findOneBy({ id: enderecoRequestDto.cidadeId });
        if (!cidade) {
            throw new BadRequestException(`Cidade não encontrada: ${enderecoRequestDto.cidadeId}`);
        }

        endereco = this.enderecosRepository.create({
            ...enderecoRequestDto,
        });

        endereco.cidade = Promise.resolve(cidade);

        return endereco;
    }


}