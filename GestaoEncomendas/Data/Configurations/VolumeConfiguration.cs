using GestaoEncomendas.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GestaoEncomendas.Data.Configurations
{
    public class VolumeConfiguration : IEntityTypeConfiguration<Volume>
    {
        public void Configure(EntityTypeBuilder<Volume> builder)
        {
            builder.ToTable("volume");

            builder.HasKey(v => v.Id);

            builder.Property(v => v.Id)
                .HasColumnName("id");

            builder.Property(v => v.Comprimento)
                .HasColumnName("comprimento")
                .HasPrecision(10, 3)
                .IsRequired();

            builder.Property(v => v.Largura)
                .HasColumnName("largura")
                .HasPrecision(10, 3)
                .IsRequired();

            builder.Property(v => v.Altura)
                .HasColumnName("altura")
                .HasPrecision(10, 3)
                .IsRequired();

            builder.Property(v => v.PesoBruto)
                .HasColumnName("peso_bruto")
                .HasPrecision(10, 3)
                .IsRequired();

            builder.Property(e => e.EncomendaId)
                 .HasColumnName("encomenda_id")
                 .IsRequired();

            builder.HasOne(v => v.Encomenda)
                .WithMany(e => e.Volumes)
                .HasForeignKey(v => v.EncomendaId)
                .IsRequired();
        }
    }
}