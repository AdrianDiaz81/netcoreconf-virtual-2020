using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace NetCoreConfVirtual.API.Avengers.API.Hulk
{
    [Route("api/[controller]")]
    [Authorize (Policy= "HulkAvenger")]
    [ApiController]
    public class HulkController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "strong", "leal" };
        }
    }
}