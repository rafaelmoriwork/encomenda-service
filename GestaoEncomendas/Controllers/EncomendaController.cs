using GestaoEncomendas.Dtos.Requests;
using GestaoEncomendas.Services;
using GestaoEncomendas.Validators.Requests;
using Microsoft.AspNetCore.Mvc;

namespace GestaoEncomendas.Controllers
{
    [ApiController]
    [Route("encomenda")]
    public class EncomendaController : ControllerBase
    {
        private readonly EncomendaService _encomendaService;
        private readonly EncomendaRequestDtoValidator _encomendaRequestDtoValidator;

        public EncomendaController(EncomendaService encomendaService, EncomendaRequestDtoValidator encomendaRequestDtoValidator)
        {
            _encomendaService = encomendaService;
            _encomendaRequestDtoValidator = encomendaRequestDtoValidator;
        }


        [HttpPost]
        public IActionResult Registrar([FromBody] EncomendaRequestDto encomendaRequestDto)
        {
            var resultado = _encomendaRequestDtoValidator.Validate(encomendaRequestDto);

            if (!resultado.IsValid)
            {
                return BadRequest(resultado.Errors);
            }

            _encomendaService.RegistrarEncomenda(encomendaRequestDto);

            return Ok();
        }

    }
}
