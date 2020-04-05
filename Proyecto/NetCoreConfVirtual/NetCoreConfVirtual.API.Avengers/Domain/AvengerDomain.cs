namespace NetCoreConfVirtual.API.Avengers.Domain
{
    using NetCoreConfVirtual.API.Avengers.Model;
    using NetCoreConfVirtual.API.Avengers.Repository;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public class AvengerDomain : IAvengerDomain
    {
        private readonly IAvengerRepository avengerRepository;

        public AvengerDomain(IAvengerRepository avengerRepository)
        {
            this.avengerRepository = avengerRepository;
        }
        public async Task<bool> DeleteAsync(string id)
        {
            return await avengerRepository.DeleteAsync(id);
        }

        public async Task<IEnumerable<Avenger>> GetAllAsync()
        {
            return await avengerRepository.GetAsync();
        }

        public async Task<Avenger> GetByIdAsync(string id)
        {
            return await avengerRepository.GetByIdAsync(id);
        }

        public async Task<Avenger> InsertAsync(Avenger people)
        {
            return await avengerRepository.AddAsync(people);
        }

        public async Task<bool> UpdateAsync(Avenger people)
        {
            return await avengerRepository.UpdateAsync(people);
        }
    }
}
