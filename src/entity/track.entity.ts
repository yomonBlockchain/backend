import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from './course.entity';

@Entity({ name: 't_track' })
export class Track {
  @PrimaryGeneratedColumn('uuid')
  track_id: string;

  @PrimaryColumn()
  course_id: string;

  @Column()
  track_title: string;

  @Column()
  track_distance: number;

  @Column()
  track_time: string;

  @Column()
  track_lat: string;

  @Column()
  track_lon: string;

  @Column()
  track_desc: string;

  @Column()
  course_period: number;

  @ManyToOne(() => Course, (course) => course.course_id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'course_id' })
  course: Course;
}
