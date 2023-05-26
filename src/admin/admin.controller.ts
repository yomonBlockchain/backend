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
import { AdminService } from './admin.service';
import { CreateAdminDto, UpdateAdminDto } from './dto';

@UseGuards(JwtGaurd)
@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post()
  async createAdmin(
    @Res() res: Response,
    @Body() createAdminDto: CreateAdminDto,
  ) {
    try {
      const result = await this.adminService.createAdmin(createAdminDto);
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
  async getAdminList(@Res() res: Response) {
    try {
      const result = await this.adminService.getAdminList();
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
  async updateAdmin(@Res() res: Response, @Body() adminInfo: UpdateAdminDto) {
    try {
      const result = await this.adminService.updateAdmin(adminInfo);
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

  @Delete(':admin_id')
  async deleteAdmin(@Res() res: Response, @Param('admin_id') admin_id: string) {
    try {
      const result = await this.adminService.deleteAdmin(admin_id);
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
