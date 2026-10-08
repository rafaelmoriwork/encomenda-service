using AutoMapper;
using GestaoEncomendas.Dtos.Requests;
using GestaoEncomendas.Entities;

namespace GestaoEncomendas.Mappers.Internals
{
    public class EnderecoProfile : Profile
    {

        public EnderecoProfile()
        {
            CreateMap<EnderecoRequestDto, Endereco>();
        }
    }
}
