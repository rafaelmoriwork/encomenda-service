using GestaoEncomendas.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GestaoEncomendas.Data.Configurations
{
    public class PessoaConfiguration : IEntityTypeConfiguration<Pessoa>
    {
        public void Configure(EntityTypeBuilder<Pessoa> builder)
        {
            builder.ToTable("pessoa");

            builder.HasKey(p => p.Id);

            builder.Property(p => p.Id)
                .HasColumnName("id");

            builder.Property(p => p.Nome)
                .HasColumnName("nome")
                .HasMaxLength(150)
                .IsRequired();

            builder.Property(p => p.TipoPessoaId)
                .HasColumnName("tipo_pessoa_id")
                .IsRequired();

            builder.Property(p => p.Fone)
                .HasColumnName("fone")
                .HasMaxLength(50);

            builder.Property(e => e.EnderecoPrincipalId)
                .HasColumnName("endereco_principal_id")
                .IsRequired();

            builder.HasOne(p => p.EnderecoPrincipal)
                .WithMany()
                .HasForeignKey(p => p.EnderecoPrincipalId)
                .IsRequired();

            builder.HasMany(p => p.Documentos)
                .WithOne(d => d.Pessoa)
                .HasForeignKey(d => d.PessoaId);
        }
    }
}