import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTrackDto {
  @IsString()
  @IsNotEmpty()
  track_id: string;

  @IsString()
  @IsOptional()
  track_title?: string;

  @IsNumber()
  @IsOptional()
  track_distance?: number;

  @IsString()
  @IsOptional()
  track_time?: string;

  @IsString()
  @IsOptional()
  track_lat?: string;

  @IsString()
  @IsOptional()
  track_lon?: string;

  @IsString()
  @IsOptional()
  track_desc?: string;

  @IsNumber()
  @IsOptional()
  course_period?: number;
}
