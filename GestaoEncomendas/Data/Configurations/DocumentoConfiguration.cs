using GestaoEncomendas.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class DocumentoConfiguration : IEntityTypeConfiguration<Documento>
{
    public void Configure(EntityTypeBuilder<Documento> builder)
    {
        builder.ToTable("documento");

        builder.HasKey(d => d.Id);

        builder.Property(d => d.Id)
            .HasColumnName("id");

        builder.Property(d => d.TipoDocumentoId)
            .HasColumnName("tipo_documento_id")
            .IsRequired();

        builder.Property(d => d.Numero)
            .HasColumnName("numero")
            .HasMaxLength(50)
            .IsRequired();

        builder.Property(d => d.PessoaId)
            .HasColumnName("pessoa_id")
            .IsRequired();

        builder.HasOne(d => d.TipoDocumento)
            .WithMany()
            .HasForeignKey(d => d.TipoDocumentoId)
            .IsRequired();

        builder.HasOne(d => d.Pessoa)
            .WithMany(p => p.Documentos)
            .HasForeignKey(d => d.PessoaId)
            .IsRequired();

        builder.HasIndex(d => new
        {
            d.TipoDocumentoId,
            d.PessoaId
        }).IsUnique();

        builder.HasIndex(d => new
        {
            d.Numero,
            d.TipoDocumentoId
        }).IsUnique();
    }
}