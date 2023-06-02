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
import { PatrolCourseService } from './patrolcourse.service';
import { CreatePatrolCourseDto, UpdatePatrolCourseDto } from './dto';

@Controller('patrolcourse')
export class PatrolCourseController {
  constructor(private patrolCourseService: PatrolCourseService) {}

  @Post()
  async createPatrolCourse(
    @Res() res: Response,
    @Body() patrolCourceInfo: CreatePatrolCourseDto,
  ) {
    try {
      const result = await this.patrolCourseService.createPatrolCourse(
        patrolCourceInfo,
      );
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
  async getPatrolCourseList(@Res() res: Response) {
    try {
      const result = await this.patrolCourseService.getPatrolCourseList();
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

  @Get(':patrol_id/:course_id')
  async getPatrolCourseDetail(
    @Res() res: Response,
    @Param('patrol_id') patrol_id: string,
    @Param('course_id') course_id: string,
  ) {
    try {
      const result = await this.patrolCourseService.getPatrolCourseDetail(
        patrol_id,
        course_id,
      );
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
  async updatePatrolCourse(
    @Res() res: Response,
    @Body() patrolCourceInfo: UpdatePatrolCourseDto,
  ) {
    try {
      const result = await this.patrolCourseService.updatePatrolCourse(
        patrolCourceInfo,
      );
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

  @Delete(':patrol_id/:course_id')
  async deletePatrolCourse(
    @Res() res: Response,
    @Param('patrol_id') patrol_id: string,
    @Param('course_id') course_id: string,
  ) {
    try {
      const result = await this.patrolCourseService.deletePatrolCourse(
        patrol_id,
        course_id,
      );
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
