using AutoMapper;
using GestaoEncomendas.Data.Repositories;
using GestaoEncomendas.Dtos.Requests;
using GestaoEncomendas.Entities;
using GestaoEncomendas.Exceptions;

namespace GestaoEncomendas.Services
{
    public class EncomendaService
    {
        private readonly EncomendaRepository _encomendaRepository;
        private readonly DocumentoRepository _documentoRepository;
        private readonly CidadeRepository _cidadeRepository;
        private readonly IMapper _mapper;

        public EncomendaService(EncomendaRepository encomendaRepository, DocumentoRepository documentoRepository, CidadeRepository cidadeRepository, IMapper mapper)
        {
            this._encomendaRepository = encomendaRepository;
            this._documentoRepository = documentoRepository;
            this._cidadeRepository = cidadeRepository;
            this._mapper = mapper;
        }

        public void RegistrarEncomenda(EncomendaRequestDto encomendaRequestDto)
        {
            Cidade cidade = this._cidadeRepository.FindByCodigoIbge(encomendaRequestDto.EnderecoEntrega.CodigoIbgeCidade);
            if (cidade == null)
            {
                throw new EntityNotFoundException("Cidade não encontrada");
            }

            Documento documentoRemetente = this._documentoRepository.FindByNumero(encomendaRequestDto.DocRemetente);
            if (documentoRemetente == null)
            {
                throw new EntityNotFoundException("Documento do remetente não encontrado");
            }

            Documento documentoDestinatario = this._documentoRepository.FindByNumero(encomendaRequestDto.DocDestinatario);
            if (documentoDestinatario == null)
            {
                throw new EntityNotFoundException("Documento do destinatário não encontrado");
            }

            Encomenda encomenda = this._mapper.Map<Encomenda>(encomendaRequestDto);
            encomenda.Remetente = documentoRemetente.Pessoa;
            encomenda.Destinatario = documentoDestinatario.Pessoa;
            encomenda.EnderecoEntrega.Cidade = cidade;
            encomenda.EncomendaStatusId = EncomendaStatus.RecebidaId;
            this._encomendaRepository.save(encomenda);

        }
    }
}
