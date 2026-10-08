namespace GestaoEncomendas.Entities
{
    public class Estado
    {
        public Guid Id { get; set; }
        public string CodigoIbge { get; set; } = null!;
        public string Nome { get; set; } = null!;
        public string Uf { get; set; } = null!;
        public ICollection<Cidade> Cidades { get; set; }
            = new List<Cidade>();
    }
}