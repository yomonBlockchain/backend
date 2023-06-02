import { IsBoolean, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @IsNotEmpty()
  group_id: string;

  @IsString()
  @IsNotEmpty()
  group_name: string;

  @IsString()
  @IsNotEmpty()
  group_leader_id: string;

  @IsString()
  @IsNotEmpty()
  group_member: string;

  @IsString()
  @IsOptional()
  group_desc: string;

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
