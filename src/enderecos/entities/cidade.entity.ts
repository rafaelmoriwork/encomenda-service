import { Column, Entity, Generated, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import { Estado } from '../../enderecos/entities/estado.entity.js';
import { Endereco } from '../../enderecos/entities/endereco.entity.js';

@Entity({ name: 'cidade' })
@Index('IX_cidade_codigo_ibge', ['codigoIbge'], { unique: true })
@Index('IX_cidade_estado_id', ['estado'])
export class Cidade {
  @PrimaryColumn({ type: 'char', length: 36 })
  @Generated('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 100 })
  public nome!: string;

  @Column({ name: 'codigo_ibge', type: 'varchar', length: 7 })
  public codigoIbge!: string;

  @ManyToOne(() => Estado, (estado) => estado.cidades, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'estado_id', referencedColumnName: 'id', foreignKeyConstraintName: 'FK_cidade_estado_estado_id' })
  public estado!: Promise<Relation<Estado>>;

  @OneToMany(() => Endereco, (endereco) => endereco.cidade)
  public enderecos!: Promise<Relation<Endereco[]>>;
}
