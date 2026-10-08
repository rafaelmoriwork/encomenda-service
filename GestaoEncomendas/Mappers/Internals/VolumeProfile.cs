using AutoMapper;
using GestaoEncomendas.Dtos.Requests;
using GestaoEncomendas.Entities;

namespace GestaoEncomendas.Mappers.Internals
{
    public class VolumeProfile : Profile
    {
        public VolumeProfile()
        {
            CreateMap<VolumeRequestDto, Volume>();
        }
    }
}
