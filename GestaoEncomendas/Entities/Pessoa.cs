namespace GestaoEncomendas.Entities
{
    public class Pessoa
    {
        public Guid Id { get; set; }
        public string Nome { get; set; } = null!;
        public Guid EnderecoPrincipalId { get; set; }
        public Endereco EnderecoPrincipal { get; set; } = null!;
        public TipoPessoa TipoPessoa { get; set; }
        public Guid TipoPessoaId { get; set; }
        public string? Fone { get; set; }
        public ICollection<Documento> Documentos { get; set; }
            = new List<Documento>();
    }
}