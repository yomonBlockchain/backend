import { IsNotEmpty, IsString } from 'class-validator';

export class GuardSignUpDto {
  @IsString()
  @IsNotEmpty()
  guard_login_id: string;

  @IsString()
  @IsNotEmpty()
  guard_login_pw: string;

  @IsString()
  @IsNotEmpty()
  guard_nm: string;

  @IsString()
  @IsNotEmpty()
  guard_ether_address: string;
}
