import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course, Track } from '../entity';
import { DataSource, Repository } from 'typeorm';
import { CreateCourseDto, UpdateCourseDto } from './dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    @InjectRepository(Track)
    private trackRepository: Repository<Track>,
    private dataSource: DataSource,
  ) {}

  async createCourse(courseInfo: CreateCourseDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    try {
      let result = {};
      const { track, ...course } = courseInfo;

      await queryRunner.connect();
      await queryRunner.startTransaction();
      const Ccourse = this.courseRepository.create(course);
      const _course = await queryRunner.manager.save(Ccourse);
      result = { ..._course };
      if (track) {
        const { course_id } = _course;
        const trackPromise = track.map(async (item) => {
          const _track = this.trackRepository.create({ ...item, course_id });
          const result = await queryRunner.manager.save(_track);
          return result;
        });

        const _track = await Promise.all(trackPromise);
        result = { ...result, _track };
      }

      await queryRunner.commitTransaction();
      return result;
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }

  async getCourseList() {
    try {
      const course = await this.courseRepository.find();
      const trackPromise = await course.map(async (item) => {
        const { course_id } = item;
        const result = await this.trackRepository.find({
          where: { course_id },
        });
        return { ...item, track: result };
      });
      const track = Promise.all(trackPromise);

      return track;
    } catch (e) {
      throw e;
    }
  }

  async updateCourse(courseInfo: UpdateCourseDto) {
    try {
      const { course_id, ...updateInfo } = courseInfo;
      const result = await this.courseRepository.update(
        { course_id },
        updateInfo,
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  async deleteCourse(course_id: string) {
    try {
      const result = await this.courseRepository.delete(course_id);
      return result;
    } catch (e) {
      throw e;
    }
  }
}
