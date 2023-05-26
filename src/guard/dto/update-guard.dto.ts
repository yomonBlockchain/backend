import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
}
