namespace GestaoEncomendas.Configurations.BeforeBuildConfigs
{
    public interface IBeforeBuildContainerRegisterConfig
    {
        public static abstract void ContainerRegister(WebApplicationBuilder builder);
    }
}
