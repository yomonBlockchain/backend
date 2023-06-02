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
import { CreateKeeperDto, UpdaetKeeperDto } from './dto';
import { KeeperService } from './keeper.service';

@Controller('keeper')
export class KeeperController {
  constructor(private keeperService: KeeperService) {}

  @Post()
  async createKeeper(
    @Res() res: Response,
    @Body() keeperInfo: CreateKeeperDto,
  ) {
    try {
      const result = await this.keeperService.createKeeper(keeperInfo);
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
  async getKeeperList(@Res() res: Response) {
    try {
      const result = await this.keeperService.getKeeperList();
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

  @Get(':keeper_id')
  async getKeeperDetail(
    @Res() res: Response,
    @Param('keeper_id') keeper_id: string,
  ) {
    try {
      const result = await this.keeperService.getKeeperDetail(keeper_id);
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
  async updateKeeper(
    @Res() res: Response,
    @Body() keeperInfo: UpdaetKeeperDto,
  ) {
    try {
      const result = await this.keeperService.updateKeeper(keeperInfo);
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

  @Delete(':keeper_id')
  async deleteKeeper(
    @Res() res: Response,
    @Param('keeper_id') keeper_id: string,
  ) {
    try {
      const result = await this.keeperService.deleteKeeper(keeper_id);
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
