import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ADMIN_DIV } from '../../entity';

export class AdminSignupDto {
  @IsString()
  @IsNotEmpty()
  admin_nm: string;

  @IsString()
  @IsNotEmpty()
  admin_login_id: string;

  @IsString()
  @IsNotEmpty()
  admin_login_pw: string;

  @IsEnum(ADMIN_DIV)
  @IsOptional()
  admin_div?: ADMIN_DIV;
}
