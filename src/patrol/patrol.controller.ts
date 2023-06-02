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
import { CreatePatrolDto, UpdatePatrolDto } from './dto';
import { PatrolService } from './patrol.service';

@Controller('patrol')
export class PatrolController {
  constructor(private patrolService: PatrolService) {}

  @Post()
  async createPatrol(
    @Res() res: Response,
    @Body() patrolInfo: CreatePatrolDto,
  ) {
    try {
      const result = await this.patrolService.createPatrol(patrolInfo);
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
  async getPatrolList(@Res() res: Response) {
    try {
      const result = await this.patrolService.getPatrolList();
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

  @Get(':patrol_id')
  async getWorkingGroupDetail(
    @Res() res: Response,
    @Param('patrol_id') patrol_id: string,
  ) {
    try {
      const result = await this.patrolService.getPatrolDetail(patrol_id);
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
  async updatePatrol(
    @Res() res: Response,
    @Body() patrolInfo: UpdatePatrolDto,
  ) {
    try {
      const result = await this.patrolService.updatePatrol(patrolInfo);
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

  @Delete(':patrol_id')
  async deletePatrol(
    @Res() res: Response,
    @Param('patrol_id') patrol_id: string,
  ) {
    try {
      const result = await this.patrolService.deletePatrol(patrol_id);
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
