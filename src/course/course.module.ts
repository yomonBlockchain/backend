import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course, Track } from '../entity';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Track])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
