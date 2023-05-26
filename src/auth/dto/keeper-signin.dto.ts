import { IsNotEmpty, IsString } from 'class-validator';

export class KeeperSignInDto {
  @IsString()
  @IsNotEmpty()
  keeper_login_id: string;

  @IsString()
  @IsNotEmpty()
  keeper_login_pw: string;
}
