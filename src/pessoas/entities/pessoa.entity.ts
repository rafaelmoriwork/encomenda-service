import { Column, Entity, Generated, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import { Endereco } from '../../enderecos/entities/endereco.entity.js';
import { TipoPessoa } from './tipo-pessoa.entity.js';
import { Documento } from './documento.entity.js';
import { Encomenda } from '../../encomendas/entities/encomenda.entity.js';

@Entity({ name: 'pessoa' })
@Index('IX_pessoa_endereco_principal_id', ['enderecoPrincipal'])
@Index('IX_pessoa_tipo_pessoa_id', ['tipoPessoa'])
export class Pessoa {
  @PrimaryColumn({ type: 'char', length: 36 })
  @Generated('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 150 })
  public nome!: string;

  @ManyToOne(() => Endereco, (endereco) => endereco.pessoas, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'endereco_principal_id', referencedColumnName: 'id', foreignKeyConstraintName: 'FK_pessoa_endereco_endereco_principal_id' })
  public enderecoPrincipal!: Promise<Relation<Endereco>>;

  @ManyToOne(() => TipoPessoa, (tipoPessoa) => tipoPessoa.pessoas, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tipo_pessoa_id', referencedColumnName: 'id', foreignKeyConstraintName: 'FK_pessoa_tipo_pessoa_tipo_pessoa_id' })
  public tipoPessoa!: Promise<Relation<TipoPessoa>>;

  @Column({ type: 'varchar', length: 50, nullable: true })
  public fone!: string | null;

  @OneToMany(() => Documento, (documento) => documento.pessoa)
  public documentos!: Promise<Relation<Documento[]>>;

  @OneToMany(() => Encomenda, (encomenda) => encomenda.remetente)
  public encomendasEnviadas!: Promise<Relation<Encomenda[]>>;

  @OneToMany(() => Encomenda, (encomenda) => encomenda.destinatario)
  public encomendasRecebidas!: Promise<Relation<Encomenda[]>>;
}
