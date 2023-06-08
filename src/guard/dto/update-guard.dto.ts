import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateGuardDto {
  @IsString()
  @IsNotEmpty()
  guard_id: string;

  @IsString()
  @IsOptional()
  guard_login_pw?: string;

  @IsString()
  @IsOptional()
  guard_nm?: string;

  @IsNumber()
  @IsOptional()
  guard_count_patrol?: number;
}

export class CountGuardPatrolDto {
  @IsString()
  @IsNotEmpty()
  target_guard_id: string;
}

export class CountGroupGuardPatrolDto {
  @IsString()
  @IsNotEmpty()
  group_guards: string;
}
