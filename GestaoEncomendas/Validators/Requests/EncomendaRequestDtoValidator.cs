using FluentValidation;
using GestaoEncomendas.Dtos.Requests;

namespace GestaoEncomendas.Validators.Requests
{
    public class EncomendaRequestDtoValidator : AbstractValidator<EncomendaRequestDto>
    {
        public EncomendaRequestDtoValidator(EnderecoRequestDtoValidator enderecoRequestDtoValidator, VolumeRequestDtoValidator volumeRequestDtoValidator)
        {
            RuleFor(e => e.DocRemetente)
                .NotNull()
                .MaximumLength(50);

            RuleFor(e => e.DocDestinatario)
                .NotNull()
                .MaximumLength(50);

            RuleFor(e => e.Descricao)
                .MaximumLength(200);

            RuleFor(e => e.EnderecoEntrega)
                .NotNull()
                .SetValidator(enderecoRequestDtoValidator);

            RuleFor(e => e.Volumes)
                .NotNull()
                .Must(v => v.Count >= 1);

            RuleForEach(e => e.Volumes)
                .SetValidator(volumeRequestDtoValidator);
        }
    }
}
