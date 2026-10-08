namespace GestaoEncomendas.Data
{
    using GestaoEncomendas.Configurations.BeforeBuildConfigs;
    using GestaoEncomendas.Entities;
    using Microsoft.EntityFrameworkCore;
    public class EncomendasDbContext : DbContext, IBeforeBuildContainerRegisterConfig
    {
        public EncomendasDbContext(DbContextOptions<EncomendasDbContext> options) : base(options)
        {

        }

        public DbSet<Cidade> Cidades { get; set; }
        public DbSet<Documento> Documentos { get; set; }
        public DbSet<Encomenda> Encomendas { get; set; }
        public DbSet<Endereco> Enderecos { get; set; }
        public DbSet<Estado> Estados { get; set; }
        public DbSet<Pessoa> Pessoas { get; set; }
        public DbSet<Volume> Volumes { get; set; }
        public DbSet<EncomendaStatus> EncomendaStatus { get; set; } = null!;
        public DbSet<TipoPessoa> TiposPessoa { get; set; } = null!;
        public DbSet<TipoDocumento> TiposDocumento { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(
                typeof(EncomendasDbContext).Assembly
            );

            base.OnModelCreating(modelBuilder);
        }

        public static void ContainerRegister(WebApplicationBuilder builder)
        {
            builder.Services.AddDbContext<EncomendasDbContext>(options =>
                options.UseNpgsql(
                    builder.Configuration.GetConnectionString("PostgreSQL")));
        }

    }

}
