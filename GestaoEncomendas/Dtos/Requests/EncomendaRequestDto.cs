namespace GestaoEncomendas.Dtos.Requests
{
    public class EncomendaRequestDto
    {
        public String DocRemetente { get; set; }
        public String DocDestinatario { get; set; }
        public String Descricao { get; set; }
        public EnderecoRequestDto EnderecoEntrega { get; set; }
        public ICollection<VolumeRequestDto> Volumes { get; set; }
            = new List<VolumeRequestDto>();
    }
}
