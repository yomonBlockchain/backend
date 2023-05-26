import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 't_course' })
export class Course {
  @PrimaryGeneratedColumn('uuid')
  course_id: string;

  @Column()
  course_title: string;

  @Column()
  course_desc: string;

  @Column()
  course_reword: number;
}
