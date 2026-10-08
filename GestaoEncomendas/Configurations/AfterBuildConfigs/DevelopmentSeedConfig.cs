using GestaoEncomendas.Data.Seeds.Development;

namespace GestaoEncomendas.Configurations.AfterBuildConfigs
{
    public class DevelopmentSeedConfig : IAfterBuildContainerRegisterConfig
    {
        public static void ContainerRegister(WebApplication app)
        {
            if (app.Environment.IsDevelopment())
            {
                DevelopmentSeed.Executar(app.Services);
            }
        }
    }
}
