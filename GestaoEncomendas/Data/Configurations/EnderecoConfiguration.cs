using GestaoEncomendas.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GestaoEncomendas.Data.Configurations
{
    public class EnderecoConfiguration : IEntityTypeConfiguration<Endereco>
    {
        public void Configure(EntityTypeBuilder<Endereco> builder)
        {
            builder.ToTable("endereco");

            builder.HasKey(e => e.Id);

            builder.Property(e => e.Id)
                .HasColumnName("id");

            builder.Property(e => e.Logradouro)
                .HasColumnName("logradouro")
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(e => e.Bairro)
                .HasColumnName("bairro")
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(e => e.Numero)
                .HasColumnName("numero")
                .HasMaxLength(20);

            builder.Property(e => e.Cep)
                .HasColumnName("cep")
                .HasMaxLength(15)
                .IsRequired();

            builder.Property(e => e.CidadeId)
                .HasColumnName("cidade_id")
                .IsRequired();

            builder.HasOne(e => e.Cidade)
                .WithMany()
                .HasForeignKey(e => e.CidadeId)
                .IsRequired();
        }
    }
}