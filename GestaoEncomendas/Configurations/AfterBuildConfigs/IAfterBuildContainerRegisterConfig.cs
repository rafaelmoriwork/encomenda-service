namespace GestaoEncomendas.Configurations.AfterBuildConfigs
{
    public interface IAfterBuildContainerRegisterConfig
    {
        public static abstract void ContainerRegister(WebApplication app);
    }
}
