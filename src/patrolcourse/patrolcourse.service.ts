import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatrolCourse } from '../entity';
import { Repository } from 'typeorm';
import { CreatePatrolCourseDto, UpdatePatrolCourseDto } from './dto';

@Injectable()
export class PatrolCourseService {
  constructor(
    @InjectRepository(PatrolCourse)
    private patrolCourseRepository: Repository<PatrolCourse>,
  ) {}

  /**
   * 순찰 코스 등록
   * --
   * @param patrolCourseInfo
   * @returns
   */
  async createPatrolCourse(patrolCourseInfo: CreatePatrolCourseDto) {
    try {
      const result = await this.patrolCourseRepository.save(patrolCourseInfo);
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 순찰 코스 조회
   * --
   * @returns
   */
  async getPatrolCourseList() {
    try {
      const result = await this.patrolCourseRepository.find();
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 순찰 코스 상세 정보 조회
   * --
   * @param patrol_id
   * @param course_id
   * @returns
   */
  async getPatrolCourseDetail(patrol_id: string, course_id: string) {
    try {
      const result = await this.patrolCourseRepository.findOneOrFail({
        where: { patrol_id, course_id },
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 순찰 코스 정보 수정
   * --
   * @param patrolCourseInfo
   * @returns
   */
  async updatePatrolCourse(patrolCourseInfo: UpdatePatrolCourseDto) {
    try {
      const { patrol_id, ...updateInfo } = patrolCourseInfo;
      const result = await this.patrolCourseRepository.update(
        { patrol_id },
        updateInfo,
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 순찰 코스 정보 삭제
   * --
   * @param patrol_id
   * @param course_id
   * @returns
   */
  async deletePatrolCourse(patrol_id: string, course_id: string) {
    try {
      const patrol_course = await this.patrolCourseRepository.findOneOrFail({
        where: { patrol_id, course_id },
      });
      const result = await this.patrolCourseRepository.delete(patrol_course);
      return result;
    } catch (e) {
      throw e;
    }
  }
}
