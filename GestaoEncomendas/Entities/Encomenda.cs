namespace GestaoEncomendas.Entities
{
    public class Encomenda
    {
        public Guid Id { get; set; }
        public EncomendaStatus EncomendaStatus { get; set; }
        public Guid EncomendaStatusId { get; set; }
        public Guid RemetenteId { get; set; }
        public Pessoa Remetente { get; set; } = null!;
        public Guid DestinatarioId { get; set; }
        public Pessoa Destinatario { get; set; } = null!;
        public Guid EnderecoEntregaId { get; set; }
        public Endereco EnderecoEntrega { get; set; } = null!;
        public string? Descricao { get; set; }
        public DateTime Inclusao { get; set; } = DateTime.UtcNow;
        public ICollection<Volume> Volumes { get; set; } = new List<Volume>();
    }
}