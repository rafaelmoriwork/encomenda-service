using System.Text.RegularExpressions;

namespace GestaoEncomendas.Dtos.Requests
{
    public class EnderecoRequestDto
    {
        public String CodigoIbgeCidade { get; set; }
        public String Logradouro { get; set; }
        public String Bairro { get; set; }
        public String Numero { get; set; }
        public String Cep { get; set; }
    }
}
