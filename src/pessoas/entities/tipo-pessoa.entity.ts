import { Column, Entity, Generated, Index, OneToMany, PrimaryColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity.js';

@Entity({ name: 'tipo_pessoa' })
@Index('IX_tipo_pessoa_descricao', ['descricao'], { unique: true })
export class TipoPessoa {
  @PrimaryColumn({ type: 'char', length: 36 })
  @Generated('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 100 })
  public descricao!: string;

  @OneToMany(() => Pessoa, (pessoa) => pessoa.tipoPessoa)
  public pessoas!: Promise<Relation<Pessoa[]>>;
}
