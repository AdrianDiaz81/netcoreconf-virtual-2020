using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NetCoreConfVirtual.API.Avengers.Authorization;
using NetCoreConfVirtual.API.Avengers.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetCoreConfVirtual.API.Avengers
{
    public partial class Startup
    {
        public void AddSecurity(IServiceCollection services)
        {

            services.AddAuthentication(sharedOptions =>
            {
                sharedOptions.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddAzureAdBearer(options => Configuration.Bind("AzureAd", options));

            // Add all of your handlers to DI.
            // services.AddSingleton<IAuthorizationHandler, HulkHandler>();
            services.AddCors(options =>
            {
                options.AddPolicy(nameof(Model.Enum.Cors.AllAccess),
                builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
            });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("HulkAvenger",
                     policy => policy.RequireRole("Hulk"));
                options.AddPolicy("ViudaNegraAvenger",
                   policy => policy.RequireRole("ViudaNegra"));
                //options.AddPolicy("TenantId",
                //   policy => policy.RequireClaim("tenantid"));
                options.AddPolicy("TenantId",
                    policy => policy.RequireClaim("http://schemas.microsoft.com/identity/claims/tenantid"));

                options.AddPolicy("HasPower", policy =>
            policy.Requirements.Add(new AvengerRequirement(false)));

            });
            services.AddSingleton<IAuthorizationHandler, AvengerHandler>();
            //services.AddAuthorization(options =>
            //{
            //    options.AddPolicy("Licence", policy =>
            //        policy.Requirements.Add(new LicenceRequirement(true)));
            //});
        }

    }
}
