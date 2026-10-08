using GestaoEncomendas.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GestaoEncomendas.Data.Configurations
{
    public class EncomendaStatusConfiguration
        : IEntityTypeConfiguration<EncomendaStatus>
    {
        public void Configure(EntityTypeBuilder<EncomendaStatus> builder)
        {
            builder.ToTable("encomenda_status");

            builder.HasKey(e => e.Id);

            builder.Property(e => e.Id)
                .HasColumnName("id");

            builder.Property(e => e.Descricao)
                .HasColumnName("descricao")
                .HasMaxLength(100)
                .IsRequired();

            builder.HasIndex(e => e.Descricao)
                .IsUnique();
        }
    }
}