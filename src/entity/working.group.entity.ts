import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Guard } from './guard.entity';
import { Patrol } from './patrol.entity';

@Entity({ name: 't_working_group' })
export class WorkingGroup {
  @PrimaryGeneratedColumn('uuid')
  working_group_id: string;

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

  @ManyToOne(() => Guard, (guard) => guard.guard_id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'guard_id' })
  guard: Guard;
}
