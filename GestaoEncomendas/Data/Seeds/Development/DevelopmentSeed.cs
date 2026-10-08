namespace GestaoEncomendas.Data.Seeds.Development
{
    public class DevelopmentSeed
    {
        public static void Executar(IServiceProvider services)
        {
            using var scope = services.CreateScope();

            var context = scope.ServiceProvider
                .GetRequiredService<EncomendasDbContext>();

            EnderecoSeed.Executar(context);
            PessoaSeed.Executar(context);
        }
    }
}
