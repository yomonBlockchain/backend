import { IsNotEmpty, IsString } from 'class-validator';

export class GuardSignInDto {
  @IsString()
  @IsNotEmpty()
  guard_login_id: string;

  @IsString()
  @IsNotEmpty()
  guard_login_pw: string;
}
