using GestaoEncomendas.Entities;

namespace GestaoEncomendas.Data.Repositories
{
    public class EncomendaRepository
    {

        private readonly EncomendasDbContext _encomendasDbContext;
        public EncomendaRepository(EncomendasDbContext encomendasDbContext)
        {
            this._encomendasDbContext = encomendasDbContext;
        }

        public void save(Encomenda encomenda)
        {
            this._encomendasDbContext.Encomendas.Add(encomenda);
            this._encomendasDbContext.SaveChanges();
        }
    }
}
