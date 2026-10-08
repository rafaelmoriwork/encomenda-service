using GestaoEncomendas.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GestaoEncomendas.Data.Configurations
{
    public class EstadoConfiguration : IEntityTypeConfiguration<Estado>
    {
        public void Configure(EntityTypeBuilder<Estado> builder)
        {
            builder.ToTable("estado");

            builder.HasKey(e => e.Id);

            builder.Property(e => e.Id)
                .HasColumnName("id");

            builder.Property(e => e.CodigoIbge)
                .HasColumnName("codigo_ibge")
                .HasMaxLength(7)
                .IsRequired();

            builder.HasIndex(e => e.CodigoIbge)
                .IsUnique();

            builder.Property(e => e.Nome)
                .HasColumnName("nome")
                .HasMaxLength(100)
                .IsRequired();

            builder.HasIndex(e => e.Nome)
                .IsUnique();

            builder.Property(e => e.Uf)
                .HasColumnName("uf")
                .HasMaxLength(2)
                .IsRequired();

            builder.HasIndex(e => e.Uf)
                .IsUnique();

            builder.HasMany(e => e.Cidades)
                .WithOne(c => c.Estado)
                .HasForeignKey(c => c.EstadoId);
        }
    }
}