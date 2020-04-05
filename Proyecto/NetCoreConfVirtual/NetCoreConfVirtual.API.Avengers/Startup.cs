using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using NetCoreConfVirtual.API.Avengers.Data;

namespace NetCoreConfVirtual.API.Avengers
{
    public partial class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            AddSecurity(services);
            services.AddEntityFrameworkInMemoryDatabase()
              .AddDbContextPool<AvengerDbContext>(o => o.UseInMemoryDatabase(Guid.NewGuid().ToString()));
            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins",
                    currentbuilder =>
                    {
                        currentbuilder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                    });
                
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            //app.UseAuthentication();
            app.UseAuthorization();

            app.UseCors(nameof(Model.Enum.Cors.AllAccess));
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
