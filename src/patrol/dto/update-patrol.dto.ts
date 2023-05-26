import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

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
}
