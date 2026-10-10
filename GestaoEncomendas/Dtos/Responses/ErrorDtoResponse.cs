namespace GestaoEncomendas.Dtos.Responses
{
    public class ErrorDtoResponse
    {
        public String ErrorMessage { get; set; }
        public ICollection<ErrorFieldDtoResponse> ErrorFields { get; set; } = new List<ErrorFieldDtoResponse>();


        public void AddErrorField(ErrorFieldDtoResponse errorFieldDtoResponse)
        {
            ErrorFields.Add(errorFieldDtoResponse);
        }

    }
}
