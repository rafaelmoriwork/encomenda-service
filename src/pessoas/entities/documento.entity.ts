import { Column, Entity, Generated, Index, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity.js';
import { TipoDocumento } from './tipo-documento.entity.js';

@Entity({ name: 'documento' })
@Index('IX_documento_numero_tipo_documento_id', ['numero', 'tipoDocumento'], { unique: true })
@Index('IX_documento_pessoa_id', ['pessoa'])
@Index('IX_documento_tipo_documento_id_pessoa_id', ['tipoDocumento', 'pessoa'], { unique: true })
export class Documento {
  @PrimaryColumn({ type: 'char', length: 36 })
  @Generated('uuid')
  public id!: string;

  @ManyToOne(() => TipoDocumento, (tipoDocumento) => tipoDocumento.documentos, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tipo_documento_id', referencedColumnName: 'id', foreignKeyConstraintName: 'FK_documento_tipo_documento_tipo_documento_id' })
  public tipoDocumento!: Promise<Relation<TipoDocumento>>;

  @Column({ type: 'varchar', length: 50 })
  public numero!: string;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.documentos, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pessoa_id', referencedColumnName: 'id', foreignKeyConstraintName: 'FK_documento_pessoa_pessoa_id' })
  public pessoa!: Promise<Relation<Pessoa>>;
}
