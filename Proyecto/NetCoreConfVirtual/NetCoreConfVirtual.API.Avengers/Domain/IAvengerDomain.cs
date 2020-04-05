namespace NetCoreConfVirtual.API.Avengers.Domain
{
    using NetCoreConfVirtual.API.Avengers.Model;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    public interface IAvengerDomain
    {
        Task<IEnumerable<Avenger>> GetAllAsync();
        Task<Avenger> GetByIdAsync(string id);
        Task<Avenger> InsertAsync(Avenger people);
        Task<bool> UpdateAsync(Avenger people);
        Task<bool> DeleteAsync(string id);
    }
}
