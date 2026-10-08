using FluentValidation;
using GestaoEncomendas.Dtos.Requests;

namespace GestaoEncomendas.Validators.Requests
{
    public class EnderecoRequestDtoValidator : AbstractValidator<EnderecoRequestDto>
    {
        public EnderecoRequestDtoValidator()
        {
            RuleFor(e => e.CodigoIbgeCidade)
                .NotNull()
                .MaximumLength(7)
                .MinimumLength(7);

            RuleFor(e => e.Logradouro)
               .NotNull()
                .MaximumLength(100)
                .MinimumLength(1);

            RuleFor(e => e.Bairro)
               .NotNull()
                .MaximumLength(100)
                .MinimumLength(1);

            RuleFor(e => e.Numero)
               .NotNull()
                .MaximumLength(20)
                .MinimumLength(1);

            RuleFor(e => e.Cep)
               .NotNull()
                .MaximumLength(8)
                .MinimumLength(8);
        }
    }
}
