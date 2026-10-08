using GestaoEncomendas.Entities;

namespace GestaoEncomendas.Data.Seeds.Development;

public static class PessoaSeed
{
    public static void Executar(EncomendasDbContext context)
    {
        if (context.Pessoas.Any())
            return;

        var pessoas = new[]
        {
            new Pessoa
            {
                Id = Guid.Parse("113a73b1-20e6-41c5-9468-4b3c87c1a201"),
                Nome = "João da Silva",
                EnderecoPrincipalId = Guid.Parse("a15d7c61-35af-4b93-9441-23c79e92d101"),
                TipoPessoaId = TipoPessoa.FisicaId,
                Fone = "11987654321"
            },
            new Pessoa
            {
                Id = Guid.Parse("224b84c2-31f7-42d6-a579-5c4d98d2a202"),
                Nome = "Maria Oliveira",
                EnderecoPrincipalId = Guid.Parse("b24820e3-80b7-46fa-80bd-c667fc78d102"),
                TipoPessoaId = TipoPessoa.FisicaId,
                Fone = "11976543210"
            },
            new Pessoa
            {
                Id = Guid.Parse("335c95d3-4208-43e7-b68a-6d5ea9e3a203"),
                Nome = "Carlos Eduardo Santos",
                EnderecoPrincipalId = Guid.Parse("c3571d86-8ee2-4558-a390-d317df88d103"),
                TipoPessoaId = TipoPessoa.FisicaId,
                Fone = "11965432109"
            },
            new Pessoa
            {
                Id = Guid.Parse("446da6e4-5319-44f8-879b-7e6fbae4a204"),
                Nome = "Ana Paula Souza",
                EnderecoPrincipalId = Guid.Parse("d462f843-399e-42c0-b95f-f789ef43d104"),
                TipoPessoaId = TipoPessoa.FisicaId,
                Fone = "11954321098"
            },
            new Pessoa
            {
                Id = Guid.Parse("557eb7f5-642a-4509-98ac-8f70cbf5a205"),
                Nome = "Fernando Almeida",
                EnderecoPrincipalId = Guid.Parse("e5719b20-17a8-47dc-83e4-8dc97429d105"),
                TipoPessoaId = TipoPessoa.FisicaId,
                Fone = "11943210987"
            },
            new Pessoa
            {
                Id = Guid.Parse("668fc806-753b-461a-a9bd-9071dc06a206"),
                Nome = "Juliana Martins",
                EnderecoPrincipalId = Guid.Parse("f6803c75-93ad-41eb-a07c-e45716f6d106"),
                TipoPessoaId = TipoPessoa.FisicaId,
                Fone = "11932109876"
            },
            new Pessoa
            {
                Id = Guid.Parse("7790d917-864c-472b-bace-a182ed17a207"),
                Nome = "Ricardo Ferreira",
                EnderecoPrincipalId = Guid.Parse("178f21a4-bd94-489c-9c61-78966ef8d107"),
                TipoPessoaId = TipoPessoa.FisicaId,
                Fone = "11921098765"
            },
            new Pessoa
            {
                Id = Guid.Parse("88a1ea28-975d-483c-8bdf-b293fe28a208"),
                Nome = "Patrícia Rodrigues",
                EnderecoPrincipalId = Guid.Parse("289a634d-2b45-45bf-8bd3-17645fb7d108"),
                TipoPessoaId = TipoPessoa.FisicaId,
                Fone = "11910987654"
            },
            new Pessoa
            {
                Id = Guid.Parse("99b2fb39-a86e-494d-9ce0-c3a40f39a209"),
                Nome = "Marcos Pereira",
                EnderecoPrincipalId = Guid.Parse("39ab754e-6e75-421c-98ac-a08cc2f4d109"),
                TipoPessoaId = TipoPessoa.FisicaId,
                Fone = "11999887766"
            },
            new Pessoa
            {
                Id = Guid.Parse("aac30c4a-b97f-4a5e-adf1-d4b5104aa210"),
                Nome = "Camila Costa",
                EnderecoPrincipalId = Guid.Parse("4abc865f-7034-491d-a6d2-c745e2f8d110"),
                TipoPessoaId = TipoPessoa.FisicaId,
                Fone = "11988776655"
            },

            new Pessoa
            {
                Id = Guid.Parse("bbd41d5b-ca80-4b6f-be02-e5c6215ba211"),
                Nome = "Alpha Transportes Ltda",
                EnderecoPrincipalId = Guid.Parse("5bcd9760-81f5-42ae-b4e3-d856f309d111"),
                TipoPessoaId = TipoPessoa.JuridicaId,
                Fone = "1130011001"
            },
            new Pessoa
            {
                Id = Guid.Parse("cce52e6c-db91-4c70-8f13-f6d7326ca212"),
                Nome = "Beta Comércio Ltda",
                EnderecoPrincipalId = Guid.Parse("6cdea871-92a6-43bf-85f4-e967041ad112"),
                TipoPessoaId = TipoPessoa.JuridicaId,
                Fone = "1130011002"
            },
            new Pessoa
            {
                Id = Guid.Parse("ddf63f7d-eca2-4d81-9024-07e8437da213"),
                Nome = "Gamma Logística Ltda",
                EnderecoPrincipalId = Guid.Parse("7defb982-a3b7-44c0-96a5-fa78052bd113"),
                TipoPessoaId = TipoPessoa.JuridicaId,
                Fone = "1130011003"
            },
            new Pessoa
            {
                Id = Guid.Parse("ee07408e-fdb3-4e92-a135-18f9548ea214"),
                Nome = "Delta Distribuidora Ltda",
                EnderecoPrincipalId = Guid.Parse("8ef0ca93-b4c8-45d1-a7b6-0b89163cd114"),
                TipoPessoaId = TipoPessoa.JuridicaId,
                Fone = "1130011004"
            },
            new Pessoa
            {
                Id = Guid.Parse("ff18519f-0ec4-4fa3-b246-290a659fa215"),
                Nome = "Omega Tecnologia Ltda",
                EnderecoPrincipalId = Guid.Parse("9f01dba4-c5d9-46e2-b8c7-1c9a274dd115"),
                TipoPessoaId = TipoPessoa.JuridicaId,
                Fone = "1130011005"
            },
            new Pessoa
            {
                Id = Guid.Parse("102962a0-1fd5-40b4-8357-3a1b76a0a216"),
                Nome = "Prime Serviços Ltda",
                EnderecoPrincipalId = Guid.Parse("1012ecb5-d6ea-47f3-89d8-2dab385ed116"),
                TipoPessoaId = TipoPessoa.JuridicaId,
                Fone = "1130011006"
            },
            new Pessoa
            {
                Id = Guid.Parse("213a73b1-20e6-41c5-9468-4b2c87b1a217"),
                Nome = "Nova Era Comércio Ltda",
                EnderecoPrincipalId = Guid.Parse("2123fdc6-e7fb-4804-9ae9-3ebc496fd117"),
                TipoPessoaId = TipoPessoa.JuridicaId,
                Fone = "1130011007"
            },
            new Pessoa
            {
                Id = Guid.Parse("324b84c2-31f7-42d6-a579-5c3d98c2a218"),
                Nome = "Central Distribuição Ltda",
                EnderecoPrincipalId = Guid.Parse("32340ed7-f80c-4915-abfa-4fcd5a70d118"),
                TipoPessoaId = TipoPessoa.JuridicaId,
                Fone = "1130011008"
            },
            new Pessoa
            {
                Id = Guid.Parse("435c95d3-4208-43e7-b68a-6d4ea9d3a219"),
                Nome = "Horizonte Transportes Ltda",
                EnderecoPrincipalId = Guid.Parse("43451fe8-091d-4a26-bc0b-50de6b81d119"),
                TipoPessoaId = TipoPessoa.JuridicaId,
                Fone = "1130011009"
            },
            new Pessoa
            {
                Id = Guid.Parse("546da6e4-5319-44f8-879b-7e5fbae4a220"),
                Nome = "Sul Express Logística Ltda",
                EnderecoPrincipalId = Guid.Parse("545620f9-1a2e-4b37-8d1c-61ef7c92d120"),
                TipoPessoaId = TipoPessoa.JuridicaId,
                Fone = "1130011010"
            }
        };

        context.Pessoas.AddRange(pessoas);
        context.SaveChanges();
    }
}