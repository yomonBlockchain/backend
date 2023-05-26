import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Patrol } from './patrol.entity';

@Entity({ name: 't_patrol_course' })
export class PatrolCourse {
  @PrimaryColumn()
  patrol_id: string;

  @PrimaryColumn()
  course_id: string;

  @ManyToOne(() => Patrol, (patrol) => patrol.patrol_id)
  @JoinColumn({ name: 'patrol_id' })
  patrol: Patrol;
}
