import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateSectorDto, UpdateSectorDto } from './dto';
import { SectorService } from './sector.service';

@Controller('sector')
export class SectorController {
  constructor(private sectorService: SectorService) {}

  @Post()
  async createSector(
    @Res() res: Response,
    @Body() sectorInfo: CreateSectorDto,
  ) {
    try {
      const result = await this.sectorService.createSector(sectorInfo);
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'success',
        data: result,
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: e.message,
      });
    }
  }

  @Get()
  async getSectorList(@Res() res: Response) {
    try {
      const result = await this.sectorService.getSectorList();
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'success',
        data: result,
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: e.message,
      });
    }
  }

  @Get(':keyword')
  async getSectorDetail(
    @Res() res: Response,
    @Param('keyword') keyword: string,
  ) {
    try {
      const result = await this.sectorService.searchSector(keyword);
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'success',
        data: result,
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: e.message,
      });
    }
  }

  @Put()
  async updateSector(
    @Res() res: Response,
    @Body() sectorInfo: UpdateSectorDto,
  ) {
    try {
      const result = await this.sectorService.updateSector(sectorInfo);
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'success',
        data: result,
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: e.message,
      });
    }
  }

  @Delete(':sector_id')
  async deleteSector(@Res() res: Response, @Param('sector_id') sector_id) {
    try {
      const result = await this.sectorService.deleteSector(sector_id);
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'success',
        data: result,
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: e.message,
      });
    }
  }
}
