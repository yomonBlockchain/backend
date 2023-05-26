import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkingGroupDto {
  @IsString()
  @IsNotEmpty()
  working_group_id: string;

  @IsString()
  @IsNotEmpty()
  patrol_id: string;

  @IsString()
  @IsNotEmpty()
  guard_id: string;

  @IsBoolean()
  @IsNotEmpty()
  is_part: boolean;
}
