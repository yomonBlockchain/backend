import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Patrol } from './patrol.entity';
import { Course } from './course.entity';

@Entity({ name: 't_patrolcourse' })
export class PatrolCourse {
  @PrimaryColumn()
  patrol_id: string;

  @PrimaryColumn()
  course_id: string;

  @Column()
  patrolcourse_name: string;

  @ManyToOne(() => Patrol, (patrol) => patrol.patrol_id)
  @JoinColumn({ name: 'patrol_id' })
  patrol: Patrol;

  @ManyToOne(() => Course, (course) => course.course_id)
  @JoinColumn({ name: 'course_id' })
  course: Course;
}
