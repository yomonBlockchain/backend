import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateWorkingGroupDto {
  @IsString()
  @IsNotEmpty()
  working_group_id: string;

  @IsString()
  @IsOptional()
  patrol_id: string;

  @IsString()
  @IsOptional()
  guard_id: string;

  @IsBoolean()
  @IsOptional()
  is_part: boolean;
}
