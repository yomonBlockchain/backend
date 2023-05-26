import { IsNotEmpty, IsString } from 'class-validator';

export class AdminSigninDto {
  @IsString()
  @IsNotEmpty()
  admin_login_id: string;

  @IsString()
  @IsNotEmpty()
  admin_login_pw: string;
}
