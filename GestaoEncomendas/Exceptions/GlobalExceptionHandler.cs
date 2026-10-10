using GestaoEncomendas.Dtos.Responses;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace GestaoEncomendas.Exceptions
{
    public class GlobalExceptionHandler : IExceptionHandler
    {
        private readonly ProblemDetailsFactory _problemDetailsFactory;

        public GlobalExceptionHandler(ProblemDetailsFactory problemDetailsFactory)
        {
            _problemDetailsFactory = problemDetailsFactory;
        }

        public async ValueTask<bool> TryHandleAsync(
            HttpContext httpContext,
            Exception exception,
            CancellationToken cancellationToken)
        {

            if (exception is BusinessException businessException)
            {
                ErrorDtoResponse errorResponse = this.HandleBusinessException(httpContext, businessException);
                await httpContext.Response.WriteAsJsonAsync(errorResponse, cancellationToken);
                return true;
            }

            if (exception is EntityNotFoundException entityNotFoundException)
            {
                ErrorDtoResponse errorResponse = this.HandleEntityNotFoundExceptionException(httpContext, entityNotFoundException);
                await httpContext.Response.WriteAsJsonAsync(errorResponse, cancellationToken);
                return true;
            }

            if (exception is ValidatorDtoRequestException validatorDtoRequestException)
            {
                ErrorDtoResponse errorResponse = this.HandleEntityValidatorDtoRequestException(httpContext, validatorDtoRequestException);
                await httpContext.Response.WriteAsJsonAsync(errorResponse, cancellationToken);
                return true;
            }


            return false;
        }

        private ErrorDtoResponse HandleEntityValidatorDtoRequestException(HttpContext context, ValidatorDtoRequestException ex)
        {

            var errorResponse = new ErrorDtoResponse
            {
                ErrorMessage = ex.Message
            };

            foreach (var error in ex.Errors)
            {

                bool campoErroJaAdicionado = false;
                foreach (var campoErroAdicionado in errorResponse.ErrorFields)
                {
                    if (campoErroAdicionado.PropertyName == error.PropertyName)
                    {
                        campoErroJaAdicionado = true;
                        campoErroAdicionado.AddErrorMessage(error.ErrorMessage);
                    }
                }

                if (campoErroJaAdicionado)
                {
                    continue;
                }

                var errorField = new ErrorFieldDtoResponse
                {
                    PropertyName = error.PropertyName
                };

                errorField.AddErrorMessage(error.ErrorMessage);

                errorResponse.AddErrorField(errorField);
            }


            context.Response.StatusCode = StatusCodes.Status422UnprocessableEntity;

            return errorResponse;
        }

        private ErrorDtoResponse HandleEntityNotFoundExceptionException(HttpContext context, EntityNotFoundException ex)
        {

            var errorResponse = new ErrorDtoResponse
            {
                ErrorMessage = ex.Message
            };

            context.Response.StatusCode = StatusCodes.Status404NotFound;

            return errorResponse;
        }

        private ErrorDtoResponse HandleBusinessException(HttpContext context, BusinessException ex)
        {
            var errorResponse = new ErrorDtoResponse
            {
                ErrorMessage = ex.Message
            };

            context.Response.StatusCode = StatusCodes.Status422UnprocessableEntity;

            return errorResponse;
        }


    }

}
