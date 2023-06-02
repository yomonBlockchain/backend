import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePatrolCourseDto {
  @IsString()
  @IsNotEmpty()
  patrol_id: string;

  @IsString()
  @IsNotEmpty()
  course_id: string;

  @IsString()
  @IsNotEmpty()
  patrolcourse_name: string;
}
