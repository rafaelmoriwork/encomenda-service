using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace GestaoEncomendas.Exceptions
{
    public class GlobalExceptionHandler : IExceptionHandler
    {
        public async ValueTask<bool> TryHandleAsync(
            HttpContext httpContext,
            Exception exception,
            CancellationToken cancellationToken)
        {
            var (status, title, detail) = exception switch
            {
                BusinessException =>
                    (
                        StatusCodes.Status422UnprocessableEntity,
                        "Regra de negócio",
                        exception.Message
                    )
            };

            var problemDetails = new ProblemDetails
            {
                Status = status,
                Title = title,
                Detail = detail
            };

            httpContext.Response.StatusCode = status;

            await httpContext.Response.WriteAsJsonAsync(
                problemDetails,
                cancellationToken);

            return true;
        }
    }

}
