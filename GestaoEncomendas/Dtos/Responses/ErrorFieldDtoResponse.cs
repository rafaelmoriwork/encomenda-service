namespace GestaoEncomendas.Dtos.Responses
{
    public class ErrorFieldDtoResponse
    {
        public String PropertyName { get; set; }
        public ICollection<string> ErrorMessages { get; set; } = new List<string>();


        public void AddErrorMessage(string errorMessage)
        {
            ErrorMessages.Add(errorMessage);
        }
    }
}
