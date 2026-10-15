import { MigrationInterface, QueryRunner } from "typeorm";

export class InserirDadosIniciais1791839212597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

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
