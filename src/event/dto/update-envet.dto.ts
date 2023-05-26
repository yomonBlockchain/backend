import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EVENT_TYPE } from '../../entity';

export class UpdateEventDto {
  @IsString()
  @IsNotEmpty()
  event_id: string;

  @IsString()
  @IsOptional()
  event_title?: string;

  @IsString()
  @IsOptional()
  event_desc?: string;

  @IsEnum(EVENT_TYPE)
  @IsOptional()
  event_type?: EVENT_TYPE;

  @IsString()
  @IsOptional()
  event_img?: string;

  @IsString()
  @IsOptional()
  event_lat?: string;

  @IsString()
  @IsOptional()
  event_lon?: string;
}
