import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EVENT_TYPE } from '../../entity';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  group_id: string;

  @IsString()
  @IsNotEmpty()
  event_title: string;

  @IsString()
  @IsNotEmpty()
  event_desc: string;

  @IsEnum(EVENT_TYPE)
  @IsOptional()
  event_type: EVENT_TYPE;

  @IsString()
  @IsOptional()
  event_img?: string;

  @IsString()
  @IsNotEmpty()
  event_lat: string;

  @IsString()
  @IsNotEmpty()
  event_lon: string;
}
