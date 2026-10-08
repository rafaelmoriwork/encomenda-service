using GestaoEncomendas.Mappers.Internals;

namespace GestaoEncomendas.Configurations.BeforeBuildConfigs
{
    public class MapperConfig : IBeforeBuildContainerRegisterConfig
    {
        public static void ContainerRegister(WebApplicationBuilder builder)
        {
            builder.Services.AddAutoMapper(cfg => { }, typeof(EncomendaProfile))
                            .AddAutoMapper(cfg => { }, typeof(EnderecoProfile))
                            .AddAutoMapper(cfg => { }, typeof(VolumeProfile));
        }
    }
}
