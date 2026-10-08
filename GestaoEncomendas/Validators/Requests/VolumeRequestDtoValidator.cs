using GestaoEncomendas.Dtos.Requests;
using FluentValidation;

namespace GestaoEncomendas.Validators.Requests
{
    public class VolumeRequestDtoValidator : AbstractValidator<VolumeRequestDto>
    {
        public VolumeRequestDtoValidator()
        {
            RuleFor(v => v.PesoBruto)
                .GreaterThan(0)
                .NotNull()
                .PrecisionScale(10, 3, false);

            RuleFor(v => v.Comprimento)
                .GreaterThan(0)
                .NotNull()
                .PrecisionScale(10, 3, false);

            RuleFor(v => v.Largura)
                .GreaterThan(0)
                .NotNull()
                .PrecisionScale(10, 3, false);

            RuleFor(v => v.Altura)
                .GreaterThan(0)
                .NotNull()
                .PrecisionScale(10, 3, false);
        }

    }
}
