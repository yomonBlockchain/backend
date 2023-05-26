import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ADMIN_DIV } from '../../entity';

export class UpdateAdminDto {
  @IsString()
  @IsNotEmpty()
  admin_id: string;

  @IsString()
  @IsOptional()
  admin_nm?: string;

  @IsString()
  @IsOptional()
  admin_login_pw: string;

  @IsEnum(ADMIN_DIV)
  @IsOptional()
  admin_div?: ADMIN_DIV;
}
