import { Column, Entity, Generated, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import { Cidade } from './cidade.entity.js';
import { Pessoa } from '../../pessoas/entities/pessoa.entity.js';
import { Encomenda } from '../../encomendas/entities/encomenda.entity.js';

@Entity({ name: 'endereco' })
@Index('IX_endereco_cidade_id', ['cidade'])
export class Endereco {
  @PrimaryColumn({ type: 'char', length: 36 })
  @Generated('uuid')
  public id!: string;

  @ManyToOne(() => Cidade, (cidade) => cidade.enderecos, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cidade_id', referencedColumnName: 'id', foreignKeyConstraintName: 'FK_endereco_cidade_cidade_id' })
  public cidade!: Promise<Relation<Cidade>>;

  @Column({ type: 'varchar', length: 100 })
  public logradouro!: string;

  @Column({ type: 'varchar', length: 100 })
  public bairro!: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  public numero!: string | null;

  @Column({ type: 'varchar', length: 15 })
  public cep!: string;

  @OneToMany(() => Pessoa, (pessoa) => pessoa.enderecoPrincipal)
  public pessoas!: Promise<Relation<Pessoa[]>>;

  @OneToMany(() => Encomenda, (encomenda) => encomenda.enderecoEntrega)
  public encomendasEntrega!: Promise<Relation<Encomenda[]>>;
}
