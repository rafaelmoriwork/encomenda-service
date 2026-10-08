using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GestaoEncomendas.Migrations
{
    /// <inheritdoc />
    public partial class InserirEstados : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "estado",
                columns: new[] { "id", "codigo_ibge", "nome", "uf" },
                values: new object[,]
                {
                    {
                        Guid.Parse("64dff537-4f4c-4b4f-9de4-1831723c7187"),
                        "11",
                        "Rondônia",
                        "RO"
                    },
                    {
                        Guid.Parse("3a77b011-fa35-4a8c-bd79-c1d0266ff6e2"),
                        "12",
                        "Acre",
                        "AC"
                    },
                    {
                        Guid.Parse("fc9d6556-60cc-471e-9463-67458aff0ac9"),
                        "13",
                        "Amazonas",
                        "AM"
                    },
                    {
                        Guid.Parse("050b8dc8-4da7-4ed9-baf1-c2158005b032"),
                        "14",
                        "Roraima",
                        "RR"
                    },
                    {
                        Guid.Parse("63fb2adb-95ee-4276-9f27-31f88d33acdb"),
                        "15",
                        "Pará",
                        "PA"
                    },
                    {
                        Guid.Parse("c70b7e58-2f8b-49d4-bde9-5b21e10bfb1b"),
                        "16",
                        "Amapá",
                        "AP"
                    },
                    {
                        Guid.Parse("b93dfc33-f957-4456-9604-c554554058fc"),
                        "17",
                        "Tocantins",
                        "TO"
                    },
                    {
                        Guid.Parse("93446030-0f91-4f98-8394-bbf1c5bf05d4"),
                        "21",
                        "Maranhão",
                        "MA"
                    },
                    {
                        Guid.Parse("5ad8a4e9-bea8-4ab7-88d9-6152b405a474"),
                        "22",
                        "Piauí",
                        "PI"
                    },
                    {
                        Guid.Parse("51c72bcd-e8b9-4118-8328-4010b4a6999c"),
                        "23",
                        "Ceará",
                        "CE"
                    },
                    {
                        Guid.Parse("954c9ced-3428-4938-8823-f95ff89cc1c9"),
                        "24",
                        "Rio Grande do Norte",
                        "RN"
                    },
                    {
                        Guid.Parse("24a87b18-849e-4a8a-a0db-92ae42806ad4"),
                        "25",
                        "Paraíba",
                        "PB"
                    },
                    {
                        Guid.Parse("ca6a5d7c-6d39-4ff1-9e2b-be5dc25626c6"),
                        "26",
                        "Pernambuco",
                        "PE"
                    },
                    {
                        Guid.Parse("3e735aa2-b85f-4882-9bfe-beb252d7e4ad"),
                        "27",
                        "Alagoas",
                        "AL"
                    },
                    {
                        Guid.Parse("e8e39af3-fce0-4e3a-8533-c2ad595ce55d"),
                        "28",
                        "Sergipe",
                        "SE"
                    },
                    {
                        Guid.Parse("92479ae4-a438-4a17-87f3-98d4cd8d4cc8"),
                        "29",
                        "Bahia",
                        "BA"
                    },
                    {
                        Guid.Parse("d1b9b262-c1d2-4d2f-a639-48e6f460bc12"),
                        "31",
                        "Minas Gerais",
                        "MG"
                    },
                    {
                        Guid.Parse("1963e6d9-69ac-40e8-8cf0-154db3770884"),
                        "32",
                        "Espírito Santo",
                        "ES"
                    },
                    {
                        Guid.Parse("59f4b12f-f8e9-4d33-a627-8f215e6b4b44"),
                        "33",
                        "Rio de Janeiro",
                        "RJ"
                    },
                    {
                        Guid.Parse("cc3d43af-3bac-4415-8811-56cb8c9f18e7"),
                        "35",
                        "São Paulo",
                        "SP"
                    },
                    {
                        Guid.Parse("a6370f00-ed39-4667-bc36-5030da07c046"),
                        "41",
                        "Paraná",
                        "PR"
                    },
                    {
                        Guid.Parse("62102214-dc8e-432f-a338-849cf5f508fb"),
                        "42",
                        "Santa Catarina",
                        "SC"
                    },
                    {
                        Guid.Parse("24b5dd83-d2ae-4fd6-9fe4-dba29867289a"),
                        "43",
                        "Rio Grande do Sul",
                        "RS"
                    },
                    {
                        Guid.Parse("73dbc5b8-597e-4da6-aed6-6c9e1ca3cab1"),
                        "50",
                        "Mato Grosso do Sul",
                        "MS"
                    },
                    {
                        Guid.Parse("2edad297-6fc3-4ed7-9306-871a5269f7eb"),
                        "51",
                        "Mato Grosso",
                        "MT"
                    },
                    {
                        Guid.Parse("ddcbfdfe-830b-461a-b476-fccbecb0c284"),
                        "52",
                        "Goiás",
                        "GO"
                    },
                    {
                        Guid.Parse("3c6595ca-ff8e-4bc5-8f7d-b6e40e80186b"),
                        "53",
                        "Distrito Federal",
                        "DF"
                    }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("""
                DELETE FROM estado
                WHERE id IN (
                    '64dff537-4f4c-4b4f-9de4-1831723c7187',
                    '3a77b011-fa35-4a8c-bd79-c1d0266ff6e2',
                    'fc9d6556-60cc-471e-9463-67458aff0ac9',
                    '050b8dc8-4da7-4ed9-baf1-c2158005b032',
                    '63fb2adb-95ee-4276-9f27-31f88d33acdb',
                    'c70b7e58-2f8b-49d4-bde9-5b21e10bfb1b',
                    'b93dfc33-f957-4456-9604-c554554058fc',
                    '93446030-0f91-4f98-8394-bbf1c5bf05d4',
                    '5ad8a4e9-bea8-4ab7-88d9-6152b405a474',
                    '51c72bcd-e8b9-4118-8328-4010b4a6999c',
                    '954c9ced-3428-4938-8823-f95ff89cc1c9',
                    '24a87b18-849e-4a8a-a0db-92ae42806ad4',
                    'ca6a5d7c-6d39-4ff1-9e2b-be5dc25626c6',
                    '3e735aa2-b85f-4882-9bfe-beb252d7e4ad',
                    'e8e39af3-fce0-4e3a-8533-c2ad595ce55d',
                    '92479ae4-a438-4a17-87f3-98d4cd8d4cc8',
                    'd1b9b262-c1d2-4d2f-a639-48e6f460bc12',
                    '1963e6d9-69ac-40e8-8cf0-154db3770884',
                    '59f4b12f-f8e9-4d33-a627-8f215e6b4b44',
                    'cc3d43af-3bac-4415-8811-56cb8c9f18e7',
                    'a6370f00-ed39-4667-bc36-5030da07c046',
                    '62102214-dc8e-432f-a338-849cf5f508fb',
                    '24b5dd83-d2ae-4fd6-9fe4-dba29867289a',
                    '73dbc5b8-597e-4da6-aed6-6c9e1ca3cab1',
                    '2edad297-6fc3-4ed7-9306-871a5269f7eb',
                    'ddcbfdfe-830b-461a-b476-fccbecb0c284',
                    '3c6595ca-ff8e-4bc5-8f7d-b6e40e80186b'
                );
            """);
        }
    }
}
