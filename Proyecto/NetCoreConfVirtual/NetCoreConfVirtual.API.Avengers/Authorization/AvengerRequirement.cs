namespace NetCoreConfVirtual.API.Avengers.Authorization
{
    using Microsoft.AspNetCore.Authorization;
    public class AvengerRequirement : IAuthorizationRequirement
    {
        public bool HasPower { get; }
        public AvengerRequirement(bool hasPower)
        {
            HasPower = hasPower;
        }
    }
}
