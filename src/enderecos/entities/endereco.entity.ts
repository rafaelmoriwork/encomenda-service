import {
  Column,
  Entity,
  Generated,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Cidade } from './cidade.entity.js';

@Entity({ name: 'endereco' })
@Index('IX_endereco_cidade_id', ['cidade'])
export class Endereco {
  @PrimaryColumn({ type: 'char', length: 36 })
  @Generated('uuid')
  public id!: string;

  @ManyToOne(() => Cidade, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'cidade_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_endereco_cidade_cidade_id',
  })
  public cidade!: Promise<Relation<Cidade>>;

  @Column({ type: 'varchar', length: 100 })
  public logradouro!: string;

  @Column({ type: 'varchar', length: 100 })
  public bairro!: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  public numero!: string | null;

  @Column({ type: 'varchar', length: 15 })
  public cep!: string;
}
