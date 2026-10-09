using GestaoEncomendas.Configurations.AfterBuildConfigs;
using GestaoEncomendas.Configurations.BeforeBuildConfigs;
using GestaoEncomendas.Data;
using GestaoEncomendas.Exceptions;
using System.Reflection;

namespace GestaoEncomendas.Configurations
{
    public static class WebApplicationBuildConfig
    {
        // Aplicar todas as configurações antes de construir o WebApplication
        public static WebApplicationBuilder ApplyConfigurationsBeforeBuild(this WebApplicationBuilder builder)
        {
            // Registrar todas as classes que implementam a interface IBeforeBuildContainerRegisterConfig no namespace GestaoEncomendas.Configurations.BeforeBuildConfigs
            const string beforeBuildConfigNamespace = "GestaoEncomendas.Configurations.BeforeBuildConfigs";
            var interfaceType = typeof(IBeforeBuildContainerRegisterConfig);
            var configurations = interfaceType.Assembly
                .GetTypes()
                .Where(t =>
                    t.IsClass &&
                    !t.IsAbstract &&
                    interfaceType.IsAssignableFrom(t) &&
                    t.Namespace == beforeBuildConfigNamespace);

            foreach (var type in configurations)
            {
                var method = type.GetMethod(
                    "ContainerRegister",
                    BindingFlags.Public | BindingFlags.Static);

                if (method is null)
                    throw new InvalidOperationException(
                        $"Método ContainerRegister não encontrado em {type.Name}");

                method.Invoke(null, new object[] { builder });
            }

            // Demais configurações
            EncomendasDbContext.ContainerRegister(builder);
            builder.Services.AddControllers();
            builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
            builder.Services.AddProblemDetails();

            return builder;
        }

        // Aplicar todas as configurações após construir o WebApplication
        public static WebApplication ApplyConfigurationsAfterBuild(this WebApplication app)
        {

            // Registrar todas as classes que implementam a interface IAfterBuildContainerRegisterConfig no namespace GestaoEncomendas.Configurations.AfterBuildConfigs
            const string afterBuildConfigsNamespace = "GestaoEncomendas.Configurations.AfterBuildConfigs";
            var interfaceType = typeof(IAfterBuildContainerRegisterConfig);
            var configurations = interfaceType.Assembly
                .GetTypes()
                .Where(t =>
                    t.IsClass &&
                    !t.IsAbstract &&
                    interfaceType.IsAssignableFrom(t) &&
                    t.Namespace == afterBuildConfigsNamespace);

            foreach (var type in configurations)
            {
                var method = type.GetMethod(
                    "ContainerRegister",
                    BindingFlags.Public | BindingFlags.Static);

                if (method is null)
                    throw new InvalidOperationException(
                        $"Método ContainerRegister não encontrado em {type.Name}");

                method.Invoke(null, new object[] { app });
            }


            app.UseExceptionHandler();
            app.UseAuthorization();

            var basePath = app.Configuration["Api:BasePath"];
            app.MapGroup(basePath).MapControllers();

            return app;
        }
    }
}
