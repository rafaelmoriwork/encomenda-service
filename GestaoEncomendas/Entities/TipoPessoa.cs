namespace GestaoEncomendas.Entities
{
    public class TipoPessoa
    {
        public static readonly Guid FisicaId =
            Guid.Parse("4d46f130-5c35-405d-9b58-86bc70b3287f");
        public static readonly Guid JuridicaId =
            Guid.Parse("eac8487a-a83e-42bd-96f7-086148f03332");
        public Guid Id { get; set; }
        public string Descricao { get; set; } = null!;
    }
}