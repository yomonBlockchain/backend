import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGuardDto {
  @IsString()
  @IsNotEmpty()
  guard_login_id: string;

  @IsString()
  @IsNotEmpty()
  guard_login_pw: string;

  @IsString()
  @IsNotEmpty()
  guard_nm: string;
}