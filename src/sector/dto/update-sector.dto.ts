import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSectorDto {
  @IsString()
  @IsNotEmpty()
  sector_id: string;

  @IsString()
  @IsOptional()
  sector_nm?: string;

  @IsString()
  @IsOptional()
  sector_desc?: string;

  @IsString()
  @IsOptional()
  sector_lat?: string;

  @IsString()
  @IsOptional()
  sector_lon?: string;

  @IsString()
  @IsOptional()
  sector_img?: string;

  @IsNumber()
  @IsOptional()
  sector_grade?: number;

  @IsNumber()
  @IsOptional()
  sector_boundary?: number;
}
