using GestaoEncomendas.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GestaoEncomendas.Data.Configurations
{
    public class CidadeConfiguration : IEntityTypeConfiguration<Cidade>
    {
        public void Configure(EntityTypeBuilder<Cidade> builder)
        {
            builder.ToTable("cidade");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.Id)
                .HasColumnName("id");

            builder.Property(c => c.Nome)
                .HasColumnName("nome")
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(c => c.CodigoIbge)
                .HasColumnName("codigo_ibge")
                .HasMaxLength(7)
                .IsRequired();

            builder.HasIndex(c => c.CodigoIbge)
                .IsUnique();

            builder.Property(d => d.EstadoId)
                 .HasColumnName("estado_id")
                 .IsRequired();

            builder.HasOne(c => c.Estado)
                .WithMany(e => e.Cidades)
                .HasForeignKey(c => c.EstadoId)
                .IsRequired();
        }
    }
}