import {
  Column,
  Entity,
  Generated,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { EncomendaStatus } from './encomenda-status.entity.js';
import { Pessoa } from '../../pessoas/entities/pessoa.entity.js';
import { Endereco } from '../../enderecos/entities/endereco.entity.js';
import { Volume } from './volume.entity.js';

@Entity({ name: 'encomenda' })
@Index('IX_encomenda_status_id', ['status'])
@Index('IX_encomenda_remetente_id', ['remetente'])
@Index('IX_encomenda_destinatario_id', ['destinatario'])
@Index('IX_encomenda_endereco_entrega_id', ['enderecoEntrega'])
export class Encomenda {
  @PrimaryColumn({ type: 'char', length: 36 })
  @Generated('uuid')
  public id!: string;

  @ManyToOne(() => EncomendaStatus, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'status_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_encomenda_encomenda_status_status_id',
  })
  public status!: Promise<Relation<EncomendaStatus>>;

  @ManyToOne(() => Pessoa, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'remetente_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_encomenda_pessoa_remetente_id',
  })
  public remetente!: Promise<Relation<Pessoa>>;

  @ManyToOne(() => Pessoa, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'destinatario_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_encomenda_pessoa_destinatario_id',
  })
  public destinatario!: Promise<Relation<Pessoa>>;

  @ManyToOne(() => Endereco, {
    nullable: false,
    onDelete: 'CASCADE',
    cascade: ['insert'],
  })
  @JoinColumn({
    name: 'endereco_entrega_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_encomenda_endereco_endereco_entrega_id',
  })
  public enderecoEntrega!: Promise<Relation<Endereco>>;

  @Column({ type: 'varchar', length: 200 })
  public descricao!: string;

  @Column({ name: 'data_inclusao', type: 'datetime', precision: 6 })
  public dataInclusao: Date = new Date();

  @OneToMany(() => Volume, (volume) => volume.encomenda, {
    cascade: ['insert'],
  })
  public volumes!: Promise<Relation<Volume[]>>;
}
