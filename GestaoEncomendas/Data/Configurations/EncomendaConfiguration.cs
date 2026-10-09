using GestaoEncomendas.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GestaoEncomendas.Data.Configurations
{
    public class EncomendaConfiguration : IEntityTypeConfiguration<Encomenda>
    {
        public void Configure(EntityTypeBuilder<Encomenda> builder)
        {
            builder.ToTable("encomenda");

            builder.HasKey(e => e.Id);

            builder.Property(e => e.Id)
                .HasColumnName("id");

            builder.Property(e => e.EncomendaStatusId)
                .HasColumnName("status_id")
                .IsRequired();

            builder.HasOne(e => e.EncomendaStatus)
                .WithMany()
                .HasForeignKey(e => e.EncomendaStatusId)
                .IsRequired();

            builder.Property(e => e.Descricao)
                .HasColumnName("descricao")
                .HasMaxLength(200);

            builder.Property(e => e.DataInclusao)
                .HasColumnName("data_inclusao")
                .IsRequired()
                .ValueGeneratedOnAdd();

            builder.Property(e => e.RemetenteId)
                .HasColumnName("remetente_id")
                .IsRequired();

            builder.HasOne(e => e.Remetente)
                .WithMany()
                .HasForeignKey(e => e.RemetenteId)
                .IsRequired();

            builder.Property(e => e.DestinatarioId)
                .HasColumnName("destinatario_id")
                .IsRequired();

            builder.HasOne(e => e.Destinatario)
                .WithMany()
                .HasForeignKey(e => e.DestinatarioId)
                .IsRequired();

            builder.Property(e => e.EnderecoEntregaId)
                .HasColumnName("endereco_entrega_id")
                .IsRequired();

            builder.HasOne(e => e.EnderecoEntrega)
                .WithMany()
                .HasForeignKey(e => e.EnderecoEntregaId)
                .IsRequired();

            builder.HasMany(e => e.Volumes)
                .WithOne(v => v.Encomenda)
                .HasForeignKey(v => v.EncomendaId);
        }
    }
}