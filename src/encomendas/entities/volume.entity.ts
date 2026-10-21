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
import { Encomenda } from '../../encomendas/entities/encomenda.entity.js';

@Entity({ name: 'volume' })
@Index('IX_volume_encomenda_id', ['encomenda'])
export class Volume {
  @PrimaryColumn({ type: 'char', length: 36 })
  @Generated('uuid')
  public id!: string;

  @ManyToOne(() => Encomenda, (encomenda) => encomenda.volumes, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'encomenda_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_volume_encomenda_encomenda_id',
  })
  public encomenda?: Relation<Encomenda>;

  @Column({ type: 'decimal', precision: 10, scale: 3 })
  public comprimento!: number;

  @Column({ type: 'decimal', precision: 10, scale: 3 })
  public largura!: number;

  @Column({ type: 'decimal', precision: 10, scale: 3 })
  public altura!: number;

  @Column({ name: 'peso_bruto', type: 'decimal', precision: 10, scale: 3 })
  public pesoBruto!: number;

  @Column({ type: 'varchar', length: 200 })
  public descricao!: string;
}
