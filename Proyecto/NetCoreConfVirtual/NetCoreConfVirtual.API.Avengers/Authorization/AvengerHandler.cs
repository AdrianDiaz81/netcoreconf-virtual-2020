
namespace NetCoreConfVirtual.API.Avengers.Authorization
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Authorization;
    public class AvengerHandler : AuthorizationHandler<AvengerRequirement>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context,
                                                       AvengerRequirement requirement)
        {
            if ( requirement.HasPower)
            {
                context.Succeed(requirement);
            }
            return Task.CompletedTask;
        }
    }
}
