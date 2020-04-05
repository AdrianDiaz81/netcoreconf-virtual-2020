using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace NetCoreConfVirtual.API.Avengers.API.DC.v1
{
    [Route("api/[controller]")]
    [Authorize(Policy = "HasPower")]
    [ApiController]
    public class DCController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "strong", "leal" };
        }
    }
}