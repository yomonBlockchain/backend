import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePatrolCourseDto {
  @IsString()
  @IsNotEmpty()
  patrol_id: string;

  @IsString()
  @IsNotEmpty()
  course_id: string;

  @IsString()
  @IsOptional()
  patrolcourse_name: string;
}
