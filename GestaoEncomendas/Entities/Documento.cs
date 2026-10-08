namespace GestaoEncomendas.Entities
{
    public class Documento
    {
        public Guid Id { get; set; }
        public TipoDocumento TipoDocumento { get; set; }
        public Guid TipoDocumentoId { get; set; }
        public string Numero { get; set; } = null!;
        public Guid PessoaId { get; set; }
        public Pessoa Pessoa { get; set; } = null!;
    }
}