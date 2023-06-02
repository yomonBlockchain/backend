import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { PATROL_STATUS } from '../../entity';

export class UpdatePatrolDto {
  @IsString()
  @IsNotEmpty()
  patrol_id: string;

  @IsString()
  @IsOptional()
  keeper_id?: string;

  @IsString()
  @IsOptional()
  patrol_title?: string;

  @IsString()
  @IsOptional()
  patrol_desc?: string;

  @IsNumber()
  @IsOptional()
  patrol_member?: number;

  @IsNumber()
  @IsOptional()
  patrol_weight?: number;

  @IsEnum(PATROL_STATUS)
  @IsOptional()
  patrol_status?: PATROL_STATUS;
}
