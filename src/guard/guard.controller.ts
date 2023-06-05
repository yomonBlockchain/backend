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
import { CreateGuardDto, UpdateGuardDto } from './dto';
import { GuardService } from './guard.service';

@Controller('guard')
export class GuardController {
  constructor(private guardService: GuardService) {}
  @Post()
  async createGuard(@Res() res: Response, guardInfo: CreateGuardDto) {
    try {
      const result = await this.guardService.createGuard(guardInfo);
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
  async getGuardList(@Res() res: Response) {
    try {
      const result = await this.guardService.getGuardList();
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

  @Get(':guard_id')
  async getGuardDetail(
    @Res() res: Response,
    @Param('guard_id') guard_id: string,
  ) {
    try {
      const result = await this.guardService.getGuardDetail(guard_id);
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
  async updateGuard(@Res() res: Response, @Body() guardInfo: UpdateGuardDto) {
    try {
      const result = await this.guardService.updateGuard(guardInfo);
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

  @Delete(':guard_id')
  async deleteGuard(@Res() res: Response, @Param('guard_id') guard_id: string) {
    try {
      const result = await this.guardService.deleteGuard(guard_id);
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
