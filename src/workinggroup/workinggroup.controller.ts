import {
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
import { CreateWorkingGroupDto, UpdateWorkingGroupDto } from './dto';
import { WorkinggroupService } from './workinggroup.service';

@Controller('workinggroup')
export class WorkinggroupController {
  constructor(private workinggroupService: WorkinggroupService) {}

  @Post()
  async createWorkingGroup(
    @Res() res: Response,
    workinggroupInfo: CreateWorkingGroupDto,
  ) {
    try {
      const result = await this.workinggroupService.createWorkingGroup(
        workinggroupInfo,
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

  @Get(':course_id')
  async getWorkingGroupList(
    @Res() res: Response,
    @Param('course_id') course_id: string,
  ) {
    try {
      const result = await this.workinggroupService.getWorkingGroupList(
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
  async updateWorkingGroup(
    @Res() res: Response,
    workinggroupInfo: UpdateWorkingGroupDto,
  ) {
    try {
      const result = await this.workinggroupService.updateWorkingGroup(
        workinggroupInfo,
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

  @Delete(':workinggroup_id')
  async deleteWorkingGroup(
    @Res() res: Response,
    @Param('workinggroup_id') workinggroup_id: string,
  ) {
    try {
      const result = await this.workinggroupService.deleteWorkingGroup(
        workinggroup_id,
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
