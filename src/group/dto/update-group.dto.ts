import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateGroupDto {
  @IsString()
  @IsNotEmpty()
  group_id: string;

  @IsString()
  @IsOptional()
  group_name: string;

  @IsString()
  @IsOptional()
  group_leader_id: string;

  @IsString()
  @IsOptional()
  group_member: string;

  @IsString()
  @IsOptional()
  group_desc: string;

  @IsString()
  @IsOptional()
  patrol_id: string;

  @IsString()
  @IsOptional()
  keeper_id: string;

  @IsBoolean()
  @IsOptional()
  is_part: boolean;
}

export class JoinGroupDto {
  @IsString()
  @IsNotEmpty()
  target_group_id: string;

  @IsString()
  @IsOptional()
  guard_id: string;
}
