import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePatrolDto {
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
}
