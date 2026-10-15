import { Column, Entity, Generated, Index, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pessoa' })
export class Pessoa {
  @PrimaryColumn({ type: 'char', length: 36 })
  @Generated('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 150 })
  public nome!: string;
}
