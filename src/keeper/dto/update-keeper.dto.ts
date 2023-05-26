import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdaetKeeperDto {
  @IsString()
  @IsNotEmpty()
  keeper_id: string;

  @IsString()
  @IsOptional()
  keeper_nm?: string;

  @IsString()
  @IsOptional()
  keeper_login_pw?: string;

  @IsString()
  @IsOptional()
  keeper_tel?: string;

  @IsString()
  @IsOptional()
  keeper_office?: string;

  @IsString()
  @IsOptional()
  keeper_region?: string;
}
