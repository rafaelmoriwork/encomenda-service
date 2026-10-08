using GestaoEncomendas.Validators.Requests;

namespace GestaoEncomendas.Configurations.BeforeBuildConfigs
{
    public class ValidatorConfig : IBeforeBuildContainerRegisterConfig
    {
        public static void ContainerRegister(WebApplicationBuilder builder)
        {
            builder.Services.AddScoped<EncomendaRequestDtoValidator>()
                .AddScoped<EnderecoRequestDtoValidator>()
                .AddScoped<VolumeRequestDtoValidator>();
        }
    }
}
