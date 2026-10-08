using GestaoEncomendas.Services;

namespace GestaoEncomendas.Configurations.BeforeBuildConfigs
{
    public class ServiceConfig : IBeforeBuildContainerRegisterConfig
    {
        public static void ContainerRegister(WebApplicationBuilder builder)
        {
            builder.Services.AddScoped<EncomendaService>();
        }
    }
}
