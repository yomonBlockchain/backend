import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Keeper } from './keeper.entity';

export enum PATROL_STATUS {
  PENDING = 'PENDING',
  PATROL = 'PATROL',
  DONE = 'DONE',
}

@Entity({ name: 't_patrol' })
export class Patrol {
  @PrimaryGeneratedColumn('uuid')
  patrol_id: string;

  @Column()
  keeper_id: string;

  @Column()
  patrol_title: string;

  @Column()
  patrol_desc: string;

  @Column()
  patrol_member: number;

  @Column()
  patrol_weight: number;

  @Column({ type: 'enum', enum: PATROL_STATUS, default: PATROL_STATUS.PENDING })
  patrol_status: PATROL_STATUS;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @ManyToOne(() => Keeper, (keeper) => keeper.keeper_id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'keeper_id' })
  keeper: Keeper;
}
