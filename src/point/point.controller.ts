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
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtGaurd } from '../auth/gaurd';
import { CreatePointDto, UpdatePointDto } from './dto';
import { PointService } from './point.service';

@UseGuards(JwtGaurd)
@Controller('point')
export class PointController {
  constructor(private pointService: PointService) {}

  @Post()
  async createPoint(@Res() res: Response, @Body() pointInfo: CreatePointDto) {
    try {
      const result = await this.pointService.createPoint(pointInfo);
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
  async getPointList(@Res() res: Response) {
    try {
      const result = await this.pointService.getPointList();
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
  async searchPoint(@Res() res: Response, @Param('keyword') keyword: string) {
    try {
      const result = await this.pointService.searchPoint(keyword);
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
  async updatePoint(@Res() res: Response, @Body() pointInfo: UpdatePointDto) {
    try {
      const result = await this.pointService.updatePoint(pointInfo);
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

  @Delete(':point_id')
  async deletePoint(@Res() res: Response, @Param('point_id') point_id: string) {
    try {
      const result = await this.pointService.deletePoint(point_id);
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
