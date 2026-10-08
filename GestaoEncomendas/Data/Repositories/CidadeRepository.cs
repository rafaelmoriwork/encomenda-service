using GestaoEncomendas.Entities;

namespace GestaoEncomendas.Data.Repositories
{
    public class CidadeRepository
    {
        private readonly EncomendasDbContext _encomendasDbContext;

        public CidadeRepository(EncomendasDbContext encomendasDbContext)
        {
            this._encomendasDbContext = encomendasDbContext;
        }

        public Cidade? FindByCodigoIbge(string codigoIbge)
        {
            return this._encomendasDbContext.Cidades.SingleOrDefault(cidade => cidade.CodigoIbge == codigoIbge);
        }

    }
}
