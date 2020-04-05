using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NetCoreConfVirtual.API.Avengers.Domain;
using NetCoreConfVirtual.API.Avengers.Model;

namespace NetCoreConfVirtual.API.Avengers.API.Avengers.v1
{
    [Route("api/[controller]")]
     [ApiController]
   //  [Authorize]
    public class AvengersController : ControllerBase
    {
        private readonly IAvengerDomain avengerDomain;

        public AvengersController(IAvengerDomain avengerDomain)
        {
            this.avengerDomain = avengerDomain;
        }
        /// <summary>
        /// Get Avengers
        /// </summary>
        /// <returns></returns>

        [HttpGet(Name = "Get All Avengers")]
        //[Authorize(Policy= "TenantId")]
        public async Task<IActionResult> Get()
        {
            
            var result = await avengerDomain.GetAllAsync();
            return Ok(result);
        }

        [HttpGet("featurehulk")]
        [Authorize(Roles = "Hulk")]
        public IEnumerable<string> GetHulk()
        {
            return new string[] { "fuerte", "leal" };
        }

        [HttpGet]
        [Route("featureviudanegra")]
        [Authorize(Roles = "ViudaNeegra")]
        public IEnumerable<string> GetViudaNegra()
        {
            return new string[] { "habilidosa", "silenciosa", "inteligente" };
        }

        [HttpGet("what")]
        [Authorize]
        public IEnumerable<string> What()
        {
            if (User.IsInRole("Hulk"))
            {
                return new string[] { "fuerte", "leal" };
            }
            else
            {
                return new string[] { "difernte" };
            }
        }

        /// <summary>
        /// Get Avengers by ID
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}", Name = "GetByIDAvenger")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await avengerDomain.GetByIdAsync(id.ToString());
            return Ok(result);
        }

        /// <summary>
        /// Add Avengers
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Avenger avenger)
        {
            var result = await avengerDomain.InsertAsync(avenger);
            return Ok(true);
        }

        /// <summary>
        /// Update Avengers
        /// </summary>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Avenger avenger)
        {
            var result = await avengerDomain.UpdateAsync(avenger);
            if (!result)
            {
                return NotFound();
            }
            return Ok(true);
        }

        /// <summary>
        /// Delete Avengers
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await avengerDomain.DeleteAsync(id.ToString());
            if (!result)
            {
                return NotFound();
            }
            return Ok(true);
        }
    }
}