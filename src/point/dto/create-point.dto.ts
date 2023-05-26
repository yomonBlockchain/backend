import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { POINT_TYPE } from '../../entity';

export class CreatePointDto {
  @IsString()
  @IsNotEmpty()
  point_nm: string;

  @IsString()
  @IsNotEmpty()
  point_desc: string;

  @IsString()
  @IsNotEmpty()
  point_lat: string;

  @IsString()
  @IsNotEmpty()
  point_lon: string;

  @IsString()
  @IsOptional()
  point_score?: number;

  @IsString()
  @IsOptional()
  point_img?: string;

  @IsEnum(POINT_TYPE)
  @IsOptional()
  point_type?: POINT_TYPE;
}
