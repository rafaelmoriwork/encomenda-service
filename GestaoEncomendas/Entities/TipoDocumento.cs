namespace GestaoEncomendas.Entities
{
    public class TipoDocumento
    {
        public static readonly Guid CpfId =
            Guid.Parse("8a34a1f9-aecc-48fc-841e-f8cd97dee007");
        public static readonly Guid CnpjId =
            Guid.Parse("9025cbc9-6f53-4a68-94b8-c88d94fbb04c");
        public Guid Id { get; set; }
        public string Descricao { get; set; } = null!;
    }
}