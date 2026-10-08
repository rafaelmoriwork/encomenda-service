namespace GestaoEncomendas.Entities
{
    public class Endereco
    {
        public Guid Id { get; set; }
        public Guid CidadeId { get; set; }
        public Cidade Cidade { get; set; } = null!;
        public string Logradouro { get; set; } = null!;
        public string Bairro { get; set; } = null!;
        public string? Numero { get; set; }
        public string Cep { get; set; } = null!;
    }
}