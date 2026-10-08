using GestaoEncomendas.Data.Repositories;

namespace GestaoEncomendas.Configurations.BeforeBuildConfigs
{
    public class RepositoryConfig : IBeforeBuildContainerRegisterConfig
    {
        public static void ContainerRegister(WebApplicationBuilder builder)
        {
            // Add repositories to the container.
            builder.Services.AddScoped<CidadeRepository>()
                .AddScoped<DocumentoRepository>()
                .AddScoped<EncomendaRepository>();
        }
    }
}
