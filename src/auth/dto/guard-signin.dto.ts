import { IsNotEmpty, IsString } from 'class-validator';

export class GuardSignInDto {
  @IsString()
  @IsNotEmpty()
  guard_login_id: string;

  @IsString()
  @IsNotEmpty()
  guard_login_pw: string;
}

export class GuardSignInMMDto {
  @IsString()
  @IsNotEmpty()
  guard_ether_address: string;
}
