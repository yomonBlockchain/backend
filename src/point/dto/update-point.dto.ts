import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { POINT_TYPE } from '../../entity';

export class UpdatePointDto {
  @IsString()
  @IsNotEmpty()
  point_id: string;

  @IsString()
  @IsOptional()
  point_nm?: string;

  @IsString()
  @IsOptional()
  point_desc: string;

  @IsString()
  @IsOptional()
  point_lat: string;

  @IsString()
  @IsOptional()
  point_lon?: string;

  @IsNumber()
  @IsOptional()
  point_score?: number;

  @IsString()
  @IsOptional()
  point_img?: string;

  @IsEnum(POINT_TYPE)
  @IsOptional()
  point_type?: POINT_TYPE;
}
