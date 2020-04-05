using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace NetCoreConfVirtual.API.Avengers.API.ViudaNegra
{
    [Route("api/[controller]")]
    [Authorize (Policy= "ViudaNegraAvenger")]
    [ApiController]
    public class ViudaNegraController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "strong", "leal" };
        }
    }
}