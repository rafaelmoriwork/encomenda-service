import {
  Column,
  Entity,
  Generated,
  Index,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Cidade } from './cidade.entity.js';

@Entity({ name: 'estado' })
@Index('IX_estado_codigo_ibge', ['codigoIbge'], { unique: true })
@Index('IX_estado_nome', ['nome'], { unique: true })
@Index('IX_estado_uf', ['uf'], { unique: true })
export class Estado {
  @PrimaryColumn({ type: 'char', length: 36 })
  @Generated('uuid')
  public id!: string;

  @Column({ name: 'codigo_ibge', type: 'varchar', length: 7 })
  public codigoIbge!: string;

  @Column({ type: 'varchar', length: 100 })
  public nome!: string;

  @Column({ type: 'varchar', length: 2 })
  public uf!: string;

  @OneToMany(() => Cidade, (cidade) => cidade.estado)
  public cidades!: Promise<Relation<Cidade[]>>;
}
