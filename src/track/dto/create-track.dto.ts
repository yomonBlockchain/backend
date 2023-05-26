import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTrackDto {
  @IsString()
  @IsNotEmpty()
  course_id: string;

  @IsString()
  @IsNotEmpty()
  track_title: string;

  @IsNumber()
  @IsNotEmpty()
  track_distance: number;

  @IsString()
  @IsNotEmpty()
  track_time: string;

  @IsString()
  @IsNotEmpty()
  track_lat: string;

  @IsString()
  @IsNotEmpty()
  track_lon: string;

  @IsString()
  @IsNotEmpty()
  track_desc: string;

  @IsNumber()
  @IsOptional()
  course_period?: number;
}
