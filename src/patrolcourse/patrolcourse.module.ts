import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatrolCourseController } from './patrolcourse.controller';
import { PatrolCourse } from '../entity';
import { PatrolCourseService } from './patrolcourse.service';

@Module({
  imports: [TypeOrmModule.forFeature([PatrolCourse])],
  controllers: [PatrolCourseController],
  providers: [PatrolCourseService],
})
export class PatrolCourseModule {}
