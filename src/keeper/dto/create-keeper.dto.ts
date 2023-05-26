import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateKeeperDto {
  @IsString()
  @IsNotEmpty()
  keeper_nm: string;

  @IsString()
  @IsNotEmpty()
  keeper_login_id: string;

  @IsString()
  @IsNotEmpty()
  keeper_login_pw: string;

  @IsString()
  @IsNotEmpty()
  keeper_tel: string;

  @IsString()
  @IsNotEmpty()
  keeper_office: string;

  @IsString()
  @IsOptional()
  keeper_region?: string;
}
