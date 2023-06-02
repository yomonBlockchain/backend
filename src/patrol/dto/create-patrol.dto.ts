import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { PATROL_STATUS } from '../../entity';

export class CreatePatrolDto {
  @IsString()
  @IsNotEmpty()
  patrol_id: string;

  @IsString()
  @IsNotEmpty()
  keeper_id: string;

  @IsString()
  @IsNotEmpty()
  patrol_title: string;

  @IsString()
  @IsNotEmpty()
  patrol_desc: string;

  @IsNumber()
  @IsOptional()
  patrol_member?: number;

  @IsNumber()
  @IsNotEmpty()
  patrol_weight: number;

  @IsEnum(PATROL_STATUS)
  @IsOptional()
  patrol_status?: PATROL_STATUS;
}
