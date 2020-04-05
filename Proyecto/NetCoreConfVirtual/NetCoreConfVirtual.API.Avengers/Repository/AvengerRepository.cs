

namespace NetCoreConfVirtual.API.Avengers.Repository
{
    using Microsoft.Extensions.Logging;
    using NetCoreConfVirtual.API.Avengers.Data;
    using NetCoreConfVirtual.API.Avengers.Model;

    public class AvengerRepository : RepositoryBase<Avenger>, IAvengerRepository
    {
        public AvengerRepository(ILogger logger, AvengerDbContext dataContext) : base(logger, dataContext)
        {
        }
    }
}
