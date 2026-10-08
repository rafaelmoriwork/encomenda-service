using GestaoEncomendas.Entities;
using Microsoft.EntityFrameworkCore;

namespace GestaoEncomendas.Data.Seeds.Development
{
    public class EnderecoSeed
    {
        public static void Executar(EncomendasDbContext context)
        {
            if (context.Enderecos.Any())
            {
                return;
            }

            var saoPauloId = BuscarCidadeId(context, "3550308");

            var enderecos = new[] {
                new Endereco
                {
                    Id = Guid.Parse("a15d7c61-35af-4b93-9441-23c79e92d101"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Acácias",
                    Bairro = "Vila Mariana",
                    Numero = "120",
                    Cep = "04001001"
                },
                new Endereco
                {
                    Id = Guid.Parse("b24820e3-80b7-46fa-80bd-c667fc78d102"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua dos Jasmins",
                    Bairro = "Moema",
                    Numero = "245",
                    Cep = "04512010"
                },
                new Endereco
                {
                    Id = Guid.Parse("c3571d86-8ee2-4558-a390-d317df88d103"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Palmeiras",
                    Bairro = "Pinheiros",
                    Numero = "87",
                    Cep = "05422020"
                },
                new Endereco
                {
                    Id = Guid.Parse("d462f843-399e-42c0-b95f-f789ef43d104"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua Monte Alegre",
                    Bairro = "Perdizes",
                    Numero = "315",
                    Cep = "05014000"
                },
                new Endereco
                {
                    Id = Guid.Parse("e5719b20-17a8-47dc-83e4-8dc97429d105"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Flores",
                    Bairro = "Tatuapé",
                    Numero = "540",
                    Cep = "03310010"
                },
                new Endereco
                {
                    Id = Guid.Parse("f6803c75-93ad-41eb-a07c-e45716f6d106"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua Santa Clara",
                    Bairro = "Santana",
                    Numero = "73",
                    Cep = "02031020"
                },
                new Endereco
                {
                    Id = Guid.Parse("178f21a4-bd94-489c-9c61-78966ef8d107"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua Bela Vista",
                    Bairro = "Bela Vista",
                    Numero = "910",
                    Cep = "01319010"
                },
                new Endereco
                {
                    Id = Guid.Parse("289a634d-2b45-45bf-8bd3-17645fb7d108"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Laranjeiras",
                    Bairro = "Ipiranga",
                    Numero = "421",
                    Cep = "04209000"
                },
                new Endereco
                {
                    Id = Guid.Parse("39ab754e-6e75-421c-98ac-a08cc2f4d109"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua Primavera",
                    Bairro = "Vila Madalena",
                    Numero = "156",
                    Cep = "05443010"
                },
                new Endereco
                {
                    Id = Guid.Parse("4abc865f-7034-491d-a6d2-c745e2f8d110"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Oliveiras",
                    Bairro = "Aclimação",
                    Numero = "782",
                    Cep = "01531020"
                },

                new Endereco
                {
                    Id = Guid.Parse("5bcd9760-81f5-42ae-b4e3-d856f309d111"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua Horizonte",
                    Bairro = "Butantã",
                    Numero = "45",
                    Cep = "05501030"
                },
                new Endereco
                {
                    Id = Guid.Parse("6cdea871-92a6-43bf-85f4-e967041ad112"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua Boa Esperança",
                    Bairro = "Lapa",
                    Numero = "633",
                    Cep = "05074010"
                },
                new Endereco
                {
                    Id = Guid.Parse("7defb982-a3b7-44c0-96a5-fa78052bd113"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua São Bento",
                    Bairro = "Vila Prudente",
                    Numero = "102",
                    Cep = "03132020"
                },
                new Endereco
                {
                    Id = Guid.Parse("8ef0ca93-b4c8-45d1-a7b6-0b89163cd114"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua do Bosque",
                    Bairro = "Barra Funda",
                    Numero = "780",
                    Cep = "01136000"
                },
                new Endereco
                {
                    Id = Guid.Parse("9f01dba4-c5d9-46e2-b8c7-1c9a274dd115"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Hortênsias",
                    Bairro = "Saúde",
                    Numero = "251",
                    Cep = "04143010"
                },
                new Endereco
                {
                    Id = Guid.Parse("1012ecb5-d6ea-47f3-89d8-2dab385ed116"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua dos Lírios",
                    Bairro = "Jabaquara",
                    Numero = "998",
                    Cep = "04346020"
                },
                new Endereco
                {
                    Id = Guid.Parse("2123fdc6-e7fb-4804-9ae9-3ebc496fd117"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua Nova Esperança",
                    Bairro = "Penha",
                    Numero = "174",
                    Cep = "03637000"
                },
                new Endereco
                {
                    Id = Guid.Parse("32340ed7-f80c-4915-abfa-4fcd5a70d118"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Magnólias",
                    Bairro = "Morumbi",
                    Numero = "1500",
                    Cep = "05652010"
                },
                new Endereco
                {
                    Id = Guid.Parse("43451fe8-091d-4a26-bc0b-50de6b81d119"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua dos Ipês",
                    Bairro = "Campo Belo",
                    Numero = "364",
                    Cep = "04615020"
                },
                new Endereco
                {
                    Id = Guid.Parse("545620f9-1a2e-4b37-8d1c-61ef7c92d120"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua do Sol",
                    Bairro = "Liberdade",
                    Numero = "58",
                    Cep = "01504000"
                },

                new Endereco
                {
                    Id = Guid.Parse("6567310a-2b3f-4c48-9e2d-72f08da3d121"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Orquídeas",
                    Bairro = "Brooklin",
                    Numero = "427",
                    Cep = "04561010"
                },
                new Endereco
                {
                    Id = Guid.Parse("7678421b-3c40-4d59-af3e-83019eb4d122"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua dos Girassóis",
                    Bairro = "Vila Leopoldina",
                    Numero = "690",
                    Cep = "05305020"
                },
                new Endereco
                {
                    Id = Guid.Parse("8789532c-4d51-4e6a-b04f-9412afc5d123"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Violetas",
                    Bairro = "Casa Verde",
                    Numero = "231",
                    Cep = "02519000"
                },
                new Endereco
                {
                    Id = Guid.Parse("989a643d-5e62-4f7b-8150-a523b0d6d124"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Tulipas",
                    Bairro = "Vila Formosa",
                    Numero = "819",
                    Cep = "03358010"
                },
                new Endereco
                {
                    Id = Guid.Parse("a9ab754e-6f73-408c-9261-b634c1e7d125"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Camélias",
                    Bairro = "Cambuci",
                    Numero = "93",
                    Cep = "01525020"
                },
                new Endereco
                {
                    Id = Guid.Parse("babc865f-7084-419d-a372-c745d2f8d126"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua do Lago",
                    Bairro = "Interlagos",
                    Numero = "1220",
                    Cep = "04786000"
                },
                new Endereco
                {
                    Id = Guid.Parse("cbcd9760-8195-42ae-b483-d856e309d127"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Araucárias",
                    Bairro = "Vila Guilherme",
                    Numero = "347",
                    Cep = "02055010"
                },
                new Endereco
                {
                    Id = Guid.Parse("dcdea871-92a6-43bf-8594-e967f41ad128"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Amoreiras",
                    Bairro = "Mooca",
                    Numero = "615",
                    Cep = "03104020"
                },
                new Endereco
                {
                    Id = Guid.Parse("edefb982-a3b7-44c0-96a5-fa78052bd129"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Cerejeiras",
                    Bairro = "Vila Matilde",
                    Numero = "208",
                    Cep = "03512000"
                },
                new Endereco
                {
                    Id = Guid.Parse("fef0ca93-b4c8-45d1-a7b6-0b89163cd130"),
                    CidadeId = saoPauloId,
                    Logradouro = "Rua das Azaleias",
                    Bairro = "Pirituba",
                    Numero = "744",
                    Cep = "02938010"
                }
            };

            context.Enderecos.AddRange(enderecos);
            context.SaveChanges();
        }

        private static Guid BuscarCidadeId(EncomendasDbContext context, string codigoIbge)
        {
            return context.Cidades
                .Where(c => c.CodigoIbge == codigoIbge)
                .Select(c => c.Id)
                .Single();
        }
    }
}
