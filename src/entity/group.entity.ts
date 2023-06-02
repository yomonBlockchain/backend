import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Guard } from './guard.entity';
import { Patrol } from './patrol.entity';
import { Keeper } from './keeper.entity';

@Entity({ name: 't_group' })
export class Group {
  @PrimaryGeneratedColumn('uuid')
  group_id: string;

  @Column()
  group_name: string;

  @Column()
  group_leader_id: string;

  @Column()
  group_member: string;

  @Column()
  patrol_id: string;

  @Column()
  guard_id: string;

  @Column()
  is_part: boolean;

  @ManyToOne(() => Patrol, (patrol) => patrol.patrol_id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patrol_id' })
  patrol: Patrol;

  @ManyToOne(() => Keeper, (keeper) => keeper.keeper_id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'group_leader_id' })
  keeper: Keeper;

  @ManyToOne(() => Guard, (guard) => guard.guard_id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'guard_id' })
  guard: Guard;
}
