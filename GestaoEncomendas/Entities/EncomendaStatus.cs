namespace GestaoEncomendas.Entities
{
    public class EncomendaStatus
    {
        public static readonly Guid RecebidaId =
            Guid.Parse("d822047b-681f-4607-8fb4-b64465343fa3");

        public static readonly Guid EmTransitoId =
            Guid.Parse("bb015f52-d570-446a-9135-2af9c9f073d7");

        public static readonly Guid EntregueId =
            Guid.Parse("bf6ecc70-6b36-4a89-9e29-97eed437044f");

        public static readonly Guid CanceladaId =
            Guid.Parse("3caf329a-a9e3-4d90-a7a3-d3842ed35319");

        public Guid Id { get; set; }
        public string Descricao { get; set; } = null!;
    }
}