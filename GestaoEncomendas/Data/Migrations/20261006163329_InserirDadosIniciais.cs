using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GestaoEncomendas.Migrations
{
    /// <inheritdoc />
    public partial class InserirDadosIniciais : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "tipo_documento",
                columns: new[] { "id", "descricao" },
                values: new object[,]
                {
            {
                Guid.Parse("8a34a1f9-aecc-48fc-841e-f8cd97dee007"),
                "CPF"
            },
            {
                Guid.Parse("9025cbc9-6f53-4a68-94b8-c88d94fbb04c"),
                "CNPJ"
            }
                });

            migrationBuilder.InsertData(
                table: "tipo_pessoa",
                columns: new[] { "id", "descricao" },
                values: new object[,]
                {
            {
                Guid.Parse("4d46f130-5c35-405d-9b58-86bc70b3287f"),
                "Física"
            },
            {
                Guid.Parse("eac8487a-a83e-42bd-96f7-086148f03332"),
                "Jurídica"
            }
                });

            migrationBuilder.InsertData(
                table: "encomenda_status",
                columns: new[] { "id", "descricao" },
                values: new object[,]
                {
            {
                Guid.Parse("d822047b-681f-4607-8fb4-b64465343fa3"),
                "Recebida"
            },
            {
                Guid.Parse("bb015f52-d570-446a-9135-2af9c9f073d7"),
                "Em trânsito"
            },
            {
                Guid.Parse("bf6ecc70-6b36-4a89-9e29-97eed437044f"),
                "Entregue"
            },
            {
                Guid.Parse("3caf329a-a9e3-4d90-a7a3-d3842ed35319"),
                "Cancelada"
            }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "tipo_documento",
                keyColumn: "id",
                keyValue: Guid.Parse("8a34a1f9-aecc-48fc-841e-f8cd97dee007"));

            migrationBuilder.DeleteData(
                table: "tipo_documento",
                keyColumn: "id",
                keyValue: Guid.Parse("9025cbc9-6f53-4a68-94b8-c88d94fbb04c"));

            migrationBuilder.DeleteData(
                table: "tipo_pessoa",
                keyColumn: "id",
                keyValue: Guid.Parse("4d46f130-5c35-405d-9b58-86bc70b3287f"));

            migrationBuilder.DeleteData(
                table: "tipo_pessoa",
                keyColumn: "id",
                keyValue: Guid.Parse("eac8487a-a83e-42bd-96f7-086148f03332"));

            migrationBuilder.DeleteData(
                table: "encomenda_status",
                keyColumn: "id",
                keyValue: Guid.Parse("d822047b-681f-4607-8fb4-b64465343fa3"));

            migrationBuilder.DeleteData(
                table: "encomenda_status",
                keyColumn: "id",
                keyValue: Guid.Parse("bb015f52-d570-446a-9135-2af9c9f073d7"));

            migrationBuilder.DeleteData(
                table: "encomenda_status",
                keyColumn: "id",
                keyValue: Guid.Parse("bf6ecc70-6b36-4a89-9e29-97eed437044f"));

            migrationBuilder.DeleteData(
                table: "encomenda_status",
                keyColumn: "id",
                keyValue: Guid.Parse("3caf329a-a9e3-4d90-a7a3-d3842ed35319"));
        }
    }
}
