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
import { CourseService } from './course.service';
import { CreateCourseDto, UpdateCourseDto } from './dto';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Post()
  async createCourse(
    @Res() res: Response,
    @Body() courseInfo: CreateCourseDto,
  ) {
    try {
      const result = await this.courseService.createCourse(courseInfo);
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
  async getCourseList(@Res() res: Response) {
    try {
      const result = await this.courseService.getCourseList();
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
  async updateCourse(
    @Res() res: Response,
    @Body() courseInfo: UpdateCourseDto,
  ) {
    try {
      const result = await this.courseService.updateCourse(courseInfo);
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

  @Delete(':course_id')
  async deleteCourse(
    @Res() res: Response,
    @Param('course_id') course_id: string,
  ) {
    try {
      const result = await this.courseService.deleteCourse(course_id);
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
