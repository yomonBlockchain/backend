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
import {
  CountGroupPatrolDto,
  CreateGroupDto,
  JoinGroupDto,
  UpdateGroupDto,
} from './dto';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Post()
  async createGroup(@Res() res: Response, @Body() groupInfo: CreateGroupDto) {
    try {
      const result = await this.groupService.createGroup(groupInfo);
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
  async getGroupList(@Res() res: Response) {
    try {
      const result = await this.groupService.getGroupList();
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

  @Get(':group_id')
  async getGroupDetail(
    @Res() res: Response,
    @Param('group_id') group_id: string,
  ) {
    try {
      const result = await this.groupService.getGroupDetail(group_id);
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

  @Get('guard/:group_id')
  async getGroupByGuard(
    @Res() res: Response,
    @Param('group_id') group_id: string,
  ) {
    try {
      const result = await this.groupService.getGroupByGuard(group_id);
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
  async updateGroup(@Res() res: Response, @Body() groupInfo: UpdateGroupDto) {
    try {
      const result = await this.groupService.updateGroup(groupInfo);
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

  @Put('join')
  async joinGroup(@Res() res: Response, @Body() groupInfo: JoinGroupDto) {
    try {
      const result = await this.groupService.joinGroup(groupInfo);
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

  @Put('count')
  async countGroup(
    @Res() res: Response,
    @Body() groupInfo: CountGroupPatrolDto,
  ) {
    try {
      const result = await this.groupService.countGroupPatrol(groupInfo);
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

  @Delete(':group_id')
  async deleteGroup(@Res() res: Response, @Param('group_id') group_id: string) {
    try {
      const result = await this.groupService.deleteGroup(group_id);
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
