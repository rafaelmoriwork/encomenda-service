using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GestaoEncomendas.Migrations
{
    /// <inheritdoc />
    public partial class CriarTabelasIniciais : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "encomenda_status",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    descricao = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_encomenda_status", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "estado",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    codigo_ibge = table.Column<string>(type: "character varying(7)", maxLength: 7, nullable: false),
                    nome = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    uf = table.Column<string>(type: "character varying(2)", maxLength: 2, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_estado", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "tipo_documento",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    descricao = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tipo_documento", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "tipo_pessoa",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    descricao = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tipo_pessoa", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "cidade",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    nome = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    codigo_ibge = table.Column<string>(type: "character varying(7)", maxLength: 7, nullable: false),
                    estado_id = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cidade", x => x.id);
                    table.ForeignKey(
                        name: "FK_cidade_estado_estado_id",
                        column: x => x.estado_id,
                        principalTable: "estado",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "endereco",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    cidade_id = table.Column<Guid>(type: "uuid", nullable: false),
                    logradouro = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    bairro = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    numero = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: true),
                    cep = table.Column<string>(type: "character varying(15)", maxLength: 15, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_endereco", x => x.id);
                    table.ForeignKey(
                        name: "FK_endereco_cidade_cidade_id",
                        column: x => x.cidade_id,
                        principalTable: "cidade",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "pessoa",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    nome = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: false),
                    endereco_principal_id = table.Column<Guid>(type: "uuid", nullable: false),
                    tipo_pessoa_id = table.Column<Guid>(type: "uuid", nullable: false),
                    fone = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_pessoa", x => x.id);
                    table.ForeignKey(
                        name: "FK_pessoa_endereco_endereco_principal_id",
                        column: x => x.endereco_principal_id,
                        principalTable: "endereco",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_pessoa_tipo_pessoa_tipo_pessoa_id",
                        column: x => x.tipo_pessoa_id,
                        principalTable: "tipo_pessoa",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "documento",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    tipo_documento_id = table.Column<Guid>(type: "uuid", nullable: false),
                    numero = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    pessoa_id = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_documento", x => x.id);
                    table.ForeignKey(
                        name: "FK_documento_pessoa_pessoa_id",
                        column: x => x.pessoa_id,
                        principalTable: "pessoa",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_documento_tipo_documento_tipo_documento_id",
                        column: x => x.tipo_documento_id,
                        principalTable: "tipo_documento",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "encomenda",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    status_id = table.Column<Guid>(type: "uuid", nullable: false),
                    remetente_id = table.Column<Guid>(type: "uuid", nullable: false),
                    destinatario_id = table.Column<Guid>(type: "uuid", nullable: false),
                    endereco_entrega_id = table.Column<Guid>(type: "uuid", nullable: false),
                    descricao = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    data_inclusao = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_encomenda", x => x.id);
                    table.ForeignKey(
                        name: "FK_encomenda_encomenda_status_status_id",
                        column: x => x.status_id,
                        principalTable: "encomenda_status",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_encomenda_endereco_endereco_entrega_id",
                        column: x => x.endereco_entrega_id,
                        principalTable: "endereco",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_encomenda_pessoa_destinatario_id",
                        column: x => x.destinatario_id,
                        principalTable: "pessoa",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_encomenda_pessoa_remetente_id",
                        column: x => x.remetente_id,
                        principalTable: "pessoa",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "volume",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    encomenda_id = table.Column<Guid>(type: "uuid", nullable: false),
                    comprimento = table.Column<decimal>(type: "numeric(10,3)", precision: 10, scale: 3, nullable: false),
                    largura = table.Column<decimal>(type: "numeric(10,3)", precision: 10, scale: 3, nullable: false),
                    altura = table.Column<decimal>(type: "numeric(10,3)", precision: 10, scale: 3, nullable: false),
                    peso_bruto = table.Column<decimal>(type: "numeric(10,3)", precision: 10, scale: 3, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_volume", x => x.id);
                    table.ForeignKey(
                        name: "FK_volume_encomenda_encomenda_id",
                        column: x => x.encomenda_id,
                        principalTable: "encomenda",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_cidade_codigo_ibge",
                table: "cidade",
                column: "codigo_ibge",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_cidade_estado_id",
                table: "cidade",
                column: "estado_id");

            migrationBuilder.CreateIndex(
                name: "IX_documento_numero_tipo_documento_id",
                table: "documento",
                columns: new[] { "numero", "tipo_documento_id" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_documento_pessoa_id",
                table: "documento",
                column: "pessoa_id");

            migrationBuilder.CreateIndex(
                name: "IX_documento_tipo_documento_id_pessoa_id",
                table: "documento",
                columns: new[] { "tipo_documento_id", "pessoa_id" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_encomenda_destinatario_id",
                table: "encomenda",
                column: "destinatario_id");

            migrationBuilder.CreateIndex(
                name: "IX_encomenda_endereco_entrega_id",
                table: "encomenda",
                column: "endereco_entrega_id");

            migrationBuilder.CreateIndex(
                name: "IX_encomenda_remetente_id",
                table: "encomenda",
                column: "remetente_id");

            migrationBuilder.CreateIndex(
                name: "IX_encomenda_status_id",
                table: "encomenda",
                column: "status_id");

            migrationBuilder.CreateIndex(
                name: "IX_encomenda_status_descricao",
                table: "encomenda_status",
                column: "descricao",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_endereco_cidade_id",
                table: "endereco",
                column: "cidade_id");

            migrationBuilder.CreateIndex(
                name: "IX_estado_codigo_ibge",
                table: "estado",
                column: "codigo_ibge",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_estado_nome",
                table: "estado",
                column: "nome",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_estado_uf",
                table: "estado",
                column: "uf",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_pessoa_endereco_principal_id",
                table: "pessoa",
                column: "endereco_principal_id");

            migrationBuilder.CreateIndex(
                name: "IX_pessoa_tipo_pessoa_id",
                table: "pessoa",
                column: "tipo_pessoa_id");

            migrationBuilder.CreateIndex(
                name: "IX_tipo_documento_descricao",
                table: "tipo_documento",
                column: "descricao",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_tipo_pessoa_descricao",
                table: "tipo_pessoa",
                column: "descricao",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_volume_encomenda_id",
                table: "volume",
                column: "encomenda_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "documento");

            migrationBuilder.DropTable(
                name: "volume");

            migrationBuilder.DropTable(
                name: "tipo_documento");

            migrationBuilder.DropTable(
                name: "encomenda");

            migrationBuilder.DropTable(
                name: "encomenda_status");

            migrationBuilder.DropTable(
                name: "pessoa");

            migrationBuilder.DropTable(
                name: "endereco");

            migrationBuilder.DropTable(
                name: "tipo_pessoa");

            migrationBuilder.DropTable(
                name: "cidade");

            migrationBuilder.DropTable(
                name: "estado");
        }
    }
}
