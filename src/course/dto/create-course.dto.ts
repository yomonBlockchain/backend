import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateCourseTrackDto } from './create-course-track.dto';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  course_title: string;

  @IsString()
  @IsNotEmpty()
  course_desc: string;

  @IsNumber()
  @IsOptional()
  course_reword?: number;

  @IsOptional()
  track?: CreateCourseTrackDto[];
}
