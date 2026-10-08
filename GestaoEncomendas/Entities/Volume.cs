namespace GestaoEncomendas.Entities
{
    public class Volume
    {
        public Guid Id { get; set; }
        public Guid EncomendaId { get; set; }
        public Encomenda Encomenda { get; set; } = null!;
        public decimal Comprimento { get; set; }
        public decimal Largura { get; set; }
        public decimal Altura { get; set; }
        public decimal PesoBruto { get; set; }
    }
}