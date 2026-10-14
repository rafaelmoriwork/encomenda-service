import { MigrationInterface, QueryRunner } from "typeorm";

export class InserirDadosIniciais1791839212597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO tipo_documento (id, descricao)
            VALUES
            ('8a34a1f9-aecc-48fc-841e-f8cd97dee007', 'CPF'),
            ('9025cbc9-6f53-4a68-94b8-c88d94fbb04c', 'CNPJ')
    `);

        await queryRunner.query(`
            INSERT INTO tipo_pessoa (id, descricao)
            VALUES
            ('4d46f130-5c35-405d-9b58-86bc70b3287f', 'Física'),
            ('eac8487a-a83e-42bd-96f7-086148f03332', 'Jurídica')
    `);

        await queryRunner.query(`
            INSERT INTO encomenda_status (id, descricao)
            VALUES
            ('d822047b-681f-4607-8fb4-b64465343fa3', 'Recebida'),
            ('bb015f52-d570-446a-9135-2af9c9f073d7', 'Em trânsito'),
            ('bf6ecc70-6b36-4a89-9e29-97eed437044f', 'Entregue'),
            ('3caf329a-a9e3-4d90-a7a3-d3842ed35319', 'Cancelada')
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM tipo_documento
            WHERE id IN (
                '8a34a1f9-aecc-48fc-841e-f8cd97dee007',
                '9025cbc9-6f53-4a68-94b8-c88d94fbb04c'
            )
        `);

        await queryRunner.query(`
            DELETE FROM tipo_pessoa
            WHERE id IN (
                '4d46f130-5c35-405d-9b58-86bc70b3287f',
                'eac8487a-a83e-42bd-96f7-086148f03332'
            )
        `);

        await queryRunner.query(`
            DELETE FROM encomenda_status
            WHERE id IN (
                'd822047b-681f-4607-8fb4-b64465343fa3',
                'bb015f52-d570-446a-9135-2af9c9f073d7',
                'bf6ecc70-6b36-4a89-9e29-97eed437044f',
                '3caf329a-a9e3-4d90-a7a3-d3842ed35319'
            )
        `);
    }

}
