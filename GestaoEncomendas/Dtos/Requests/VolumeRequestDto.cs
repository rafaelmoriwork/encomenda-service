using static System.Runtime.InteropServices.JavaScript.JSType;

namespace GestaoEncomendas.Dtos.Requests
{
    public class VolumeRequestDto
    {
        public decimal PesoBruto { get; set; }
        public decimal Comprimento { get; set; }
        public decimal Largura { get; set; }
        public decimal Altura { get; set; }
    }
}
