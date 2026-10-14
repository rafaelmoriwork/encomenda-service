import { Column, Entity, Generated, Index, OneToMany, PrimaryColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import { Documento } from './documento.entity.js';

@Entity({ name: 'tipo_documento' })
@Index('IX_tipo_documento_descricao', ['descricao'], { unique: true })
export class TipoDocumento {
  @PrimaryColumn({ type: 'char', length: 36 })
  @Generated('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 100 })
  public descricao!: string;

  @OneToMany(() => Documento, (documento) => documento.tipoDocumento)
  public documentos!: Promise<Relation<Documento[]>>;
}
