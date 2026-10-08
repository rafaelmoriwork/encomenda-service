namespace GestaoEncomendas.Entities
{
    public class Cidade
    {
        public Guid Id { get; set; }
        public string Nome { get; set; } = null!;
        public string CodigoIbge { get; set; } = null!;
        public Guid EstadoId { get; set; }
        public Estado Estado { get; set; } = null!;
    }
}