import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patrol } from '../entity';
import { Repository } from 'typeorm';
import { CreatePatrolDto, UpdatePatrolDto } from './dto';

@Injectable()
export class PatrolService {
  constructor(
    @InjectRepository(Patrol)
    private patrolRepository: Repository<Patrol>,
  ) {}

  /**
   * 순찰 정보 등록
   * --
   * @param patrolInfo
   * @returns
   */
  async createPatrol(patrolInfo: CreatePatrolDto) {
    try {
      const result = await this.patrolRepository.save(patrolInfo);
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 순찰 조회
   * --
   * @returns
   */
  async getPatrolList() {
    try {
      const result = await this.patrolRepository.find();
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 순찰 상세 정보 조회
   * --
   * @param patrol_id
   * @returns
   */
  async getPatrolDetail(patrol_id: string) {
    try {
      const result = await this.patrolRepository.findOneOrFail({
        where: { patrol_id },
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 순찰 정보 수정
   * --
   * @param patrolInfo
   * @returns
   */
  async updatePatrol(patrolInfo: UpdatePatrolDto) {
    try {
      const { patrol_id, ...updateInfo } = patrolInfo;
      const result = await this.patrolRepository.update(
        { patrol_id },
        updateInfo,
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 순찰 정보 삭제
   * --
   * @param patrol_id
   * @returns
   */
  async deletePatrol(patrol_id: string) {
    try {
      const result = await this.patrolRepository.delete(patrol_id);
      return result;
    } catch (e) {
      throw e;
    }
  }
}
