using GestaoEncomendas.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GestaoEncomendas.Data.Configurations
{
    public class TipoPessoaConfiguration
        : IEntityTypeConfiguration<TipoPessoa>
    {
        public void Configure(EntityTypeBuilder<TipoPessoa> builder)
        {
            builder.ToTable("tipo_pessoa");

            builder.HasKey(t => t.Id);

            builder.Property(t => t.Id)
                .HasColumnName("id");

            builder.Property(t => t.Descricao)
                .HasColumnName("descricao")
                .HasMaxLength(100)
                .IsRequired();

            builder.HasIndex(t => t.Descricao)
                .IsUnique();
        }
    }
}