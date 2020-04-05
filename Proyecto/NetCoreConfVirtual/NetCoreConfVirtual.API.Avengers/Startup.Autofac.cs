using Autofac;
using Microsoft.Extensions.Logging;
using NetCoreConfVirtual.API.Avengers.Data;
using NetCoreConfVirtual.API.Avengers.Domain;
using NetCoreConfVirtual.API.Avengers.Repository;


namespace NetCoreConfVirtual.API.Avengers
{
    public partial class Startup
    {
        public ILifetimeScope AutofacContainer { get; private set; }

        public void ConfigureContainer(ContainerBuilder builder)
        {
            AddConfigureAutofac(builder);

        }
        private void AddConfigureAutofac(ContainerBuilder builder)
        {
           
            builder.RegisterType<AvengerDomain>().As<IAvengerDomain>();
            builder.RegisterType<AvengerRepository>().As<IAvengerRepository>();
            builder.RegisterType<AvengerDbContext>().AsSelf();

            builder.Register(c =>
            {
                ILoggerFactory loggerFactory = new LoggerFactory();
                return loggerFactory.CreateLogger("logger");
            }).As<ILogger>();
        }
    }
}
