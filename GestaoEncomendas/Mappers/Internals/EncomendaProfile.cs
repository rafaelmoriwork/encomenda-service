using AutoMapper;
using GestaoEncomendas.Dtos.Requests;
using GestaoEncomendas.Entities;

namespace GestaoEncomendas.Mappers.Internals
{
    public class EncomendaProfile : Profile
    {
        public EncomendaProfile()
        {
            CreateMap<EncomendaRequestDto, Encomenda>();
        }
    }
}
