import { Column, Entity, Generated, Index, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'encomenda_status' })
@Index('IX_encomenda_status_descricao', ['descricao'], { unique: true })
export class EncomendaStatus {
  @PrimaryColumn({ type: 'char', length: 36 })
  @Generated('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 100 })
  public descricao!: string;
}
