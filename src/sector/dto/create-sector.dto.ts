import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSectorDto {
  @IsString()
  @IsNotEmpty()
  sector_nm: string;

  @IsString()
  @IsNotEmpty()
  sector_desc: string;

  @IsString()
  @IsNotEmpty()
  sector_lat: string;

  @IsString()
  @IsNotEmpty()
  sector_lon: string;

  @IsString()
  @IsOptional()
  sector_img: string;

  @IsNumber()
  @IsNotEmpty()
  sector_grade: number;

  @IsNumber()
  @IsNotEmpty()
  sector_boundary: number;
}
