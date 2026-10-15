
import { MigrationInterface, QueryRunner } from 'typeorm';

export class TabelasIniciais1791839179440 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            CREATE TABLE encomenda_status (
                id CHAR(36) NOT NULL,
                descricao VARCHAR(100) NOT NULL,
                PRIMARY KEY (id),
                UNIQUE KEY IX_encomenda_status_descricao (descricao)
            ) ENGINE=InnoDB
        `);

        await queryRunner.query(`
            CREATE TABLE estado (
                id CHAR(36) NOT NULL,
                codigo_ibge VARCHAR(7) NOT NULL,
                nome VARCHAR(100) NOT NULL,
                uf VARCHAR(2) NOT NULL,
                PRIMARY KEY (id),
                UNIQUE KEY IX_estado_codigo_ibge (codigo_ibge),
                UNIQUE KEY IX_estado_nome (nome),
                UNIQUE KEY IX_estado_uf (uf)
            ) ENGINE=InnoDB
        `);

        await queryRunner.query(`
            CREATE TABLE cidade (
                id CHAR(36) NOT NULL,
                nome VARCHAR(100) NOT NULL,
                codigo_ibge VARCHAR(7) NOT NULL,
                estado_id CHAR(36) NOT NULL,
                PRIMARY KEY (id),
                UNIQUE KEY IX_cidade_codigo_ibge (codigo_ibge),
                KEY IX_cidade_estado_id (estado_id),
                CONSTRAINT FK_cidade_estado_estado_id
                    FOREIGN KEY (estado_id)
                    REFERENCES estado(id)
                    ON DELETE CASCADE
            ) ENGINE=InnoDB
        `);

        await queryRunner.query(`
            CREATE TABLE endereco (
                id CHAR(36) NOT NULL,
                cidade_id CHAR(36) NOT NULL,
                logradouro VARCHAR(100) NOT NULL,
                bairro VARCHAR(100) NOT NULL,
                numero VARCHAR(20) NULL,
                cep VARCHAR(15) NOT NULL,
                PRIMARY KEY (id),
                KEY IX_endereco_cidade_id (cidade_id),
                CONSTRAINT FK_endereco_cidade_cidade_id
                    FOREIGN KEY (cidade_id)
                    REFERENCES cidade(id)
                    ON DELETE CASCADE
            ) ENGINE=InnoDB
        `);

        await queryRunner.query(`
            CREATE TABLE pessoa (
                id CHAR(36) NOT NULL,
                nome VARCHAR(150) NOT NULL,
                PRIMARY KEY (id)
            ) ENGINE=InnoDB
        `);

        await queryRunner.query(`
            CREATE TABLE encomenda (
                id CHAR(36) NOT NULL,
                status_id CHAR(36) NOT NULL,
                remetente_id CHAR(36) NOT NULL,
                destinatario_id CHAR(36) NOT NULL,
                endereco_entrega_id CHAR(36) NOT NULL,
                descricao VARCHAR(200) NOT NULL,
                data_inclusao DATETIME(6) NOT NULL,
                PRIMARY KEY (id),
                KEY IX_encomenda_status_id (status_id),
                KEY IX_encomenda_remetente_id (remetente_id),
                KEY IX_encomenda_destinatario_id (destinatario_id),
                KEY IX_encomenda_endereco_entrega_id (endereco_entrega_id),
                CONSTRAINT FK_encomenda_encomenda_status_status_id
                    FOREIGN KEY (status_id)
                    REFERENCES encomenda_status(id)
                    ON DELETE CASCADE,
                CONSTRAINT FK_encomenda_endereco_endereco_entrega_id
                    FOREIGN KEY (endereco_entrega_id)
                    REFERENCES endereco(id)
                    ON DELETE CASCADE,
                CONSTRAINT FK_encomenda_pessoa_destinatario_id
                    FOREIGN KEY (destinatario_id)
                    REFERENCES pessoa(id)
                    ON DELETE CASCADE,
                CONSTRAINT FK_encomenda_pessoa_remetente_id
                    FOREIGN KEY (remetente_id)
                    REFERENCES pessoa(id)
                    ON DELETE CASCADE
            ) ENGINE=InnoDB
        `);

        await queryRunner.query(`
            CREATE TABLE volume (
                id CHAR(36) NOT NULL,
                encomenda_id CHAR(36) NOT NULL,
                comprimento DECIMAL(10,3) NOT NULL,
                largura DECIMAL(10,3) NOT NULL,
                altura DECIMAL(10,3) NOT NULL,
                peso_bruto DECIMAL(10,3) NOT NULL,
                descricao VARCHAR(200) NOT NULL,
                PRIMARY KEY (id),
                KEY IX_volume_encomenda_id (encomenda_id),
                CONSTRAINT FK_volume_encomenda_encomenda_id
                    FOREIGN KEY (encomenda_id)
                    REFERENCES encomenda(id)
                    ON DELETE CASCADE
            ) ENGINE=InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query('DROP TABLE IF EXISTS volume');
        await queryRunner.query('DROP TABLE IF EXISTS encomenda');
        await queryRunner.query('DROP TABLE IF EXISTS encomenda_status');
        await queryRunner.query('DROP TABLE IF EXISTS pessoa');
        await queryRunner.query('DROP TABLE IF EXISTS endereco');
        await queryRunner.query('DROP TABLE IF EXISTS cidade');
        await queryRunner.query('DROP TABLE IF EXISTS estado');
    }
}
