import { MigrationInterface, QueryRunner } from 'typeorm';

export class InserirEstados1791839236241 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          INSERT INTO estado (id, codigo_ibge, nome, uf)
            VALUES
              ('64dff537-4f4c-4b4f-9de4-1831723c7187', '11', 'Rondônia', 'RO'),
              ('3a77b011-fa35-4a8c-bd79-c1d0266ff6e2', '12', 'Acre', 'AC'),
              ('fc9d6556-60cc-471e-9463-67458aff0ac9', '13', 'Amazonas', 'AM'),
              ('050b8dc8-4da7-4ed9-baf1-c2158005b032', '14', 'Roraima', 'RR'),
              ('63fb2adb-95ee-4276-9f27-31f88d33acdb', '15', 'Pará', 'PA'),
              ('c70b7e58-2f8b-49d4-bde9-5b21e10bfb1b', '16', 'Amapá', 'AP'),
              ('b93dfc33-f957-4456-9604-c554554058fc', '17', 'Tocantins', 'TO'),
              ('93446030-0f91-4f98-8394-bbf1c5bf05d4', '21', 'Maranhão', 'MA'),
              ('5ad8a4e9-bea8-4ab7-88d9-6152b405a474', '22', 'Piauí', 'PI'),
              ('51c72bcd-e8b9-4118-8328-4010b4a6999c', '23', 'Ceará', 'CE'),
              ('954c9ced-3428-4938-8823-f95ff89cc1c9', '24', 'Rio Grande do Norte', 'RN'),
              ('24a87b18-849e-4a8a-a0db-92ae42806ad4', '25', 'Paraíba', 'PB'),
              ('ca6a5d7c-6d39-4ff1-9e2b-be5dc25626c6', '26', 'Pernambuco', 'PE'),
              ('3e735aa2-b85f-4882-9bfe-beb252d7e4ad', '27', 'Alagoas', 'AL'),
              ('e8e39af3-fce0-4e3a-8533-c2ad595ce55d', '28', 'Sergipe', 'SE'),
              ('92479ae4-a438-4a17-87f3-98d4cd8d4cc8', '29', 'Bahia', 'BA'),
              ('d1b9b262-c1d2-4d2f-a639-48e6f460bc12', '31', 'Minas Gerais', 'MG'),
              ('1963e6d9-69ac-40e8-8cf0-154db3770884', '32', 'Espírito Santo', 'ES'),
              ('59f4b12f-f8e9-4d33-a627-8f215e6b4b44', '33', 'Rio de Janeiro', 'RJ'),
              ('cc3d43af-3bac-4415-8811-56cb8c9f18e7', '35', 'São Paulo', 'SP'),
              ('a6370f00-ed39-4667-bc36-5030da07c046', '41', 'Paraná', 'PR'),
              ('62102214-dc8e-432f-a338-849cf5f508fb', '42', 'Santa Catarina', 'SC'),
              ('24b5dd83-d2ae-4fd6-9fe4-dba29867289a', '43', 'Rio Grande do Sul', 'RS'),
              ('73dbc5b8-597e-4da6-aed6-6c9e1ca3cab1', '50', 'Mato Grosso do Sul', 'MS'),
              ('2edad297-6fc3-4ed7-9306-871a5269f7eb', '51', 'Mato Grosso', 'MT'),
              ('ddcbfdfe-830b-461a-b476-fccbecb0c284', '52', 'Goiás', 'GO'),
              ('3c6595ca-ff8e-4bc5-8f7d-b6e40e80186b', '53', 'Distrito Federal', 'DF')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
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
          )
    `);
  }
}
