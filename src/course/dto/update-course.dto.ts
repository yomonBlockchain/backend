import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCourseDto {
  @IsString()
  @IsNotEmpty()
  course_id: string;

  @IsString()
  @IsOptional()
  course_title?: string;

  @IsString()
  @IsOptional()
  course_desc?: string;

  @IsNumber()
  @IsOptional()
  course_reword?: number;
}
