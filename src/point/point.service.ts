import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Point } from '../entity';
import { CreatePointDto, UpdatePointDto } from './dto';

@Injectable()
export class PointService {
  constructor(
    @InjectRepository(Point)
    private pointRepository: Repository<Point>,
  ) {}

  /**
   * 포인트 생성
   * --
   * @param pointInfo
   * @returns
   */
  async createPoint(pointInfo: CreatePointDto) {
    try {
      const result = await this.pointRepository.save(pointInfo);
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 등록 포인트 전체 조회
   * --
   * @returns
   */
  async getPointList() {
    try {
      const result = await this.pointRepository.find();
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 포인트 검색
   * --
   * @param keyword
   * @returns
   */
  async searchPoint(keyword: string) {
    try {
      const result = await this.pointRepository.findBy({
        point_nm: Like(`%${keyword}%`),
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 포인트 수정
   * --
   * @param pointInfo
   * @returns
   */
  async updatePoint(pointInfo: UpdatePointDto) {
    try {
      const { point_id, ...updateInfo } = pointInfo;
      const result = await this.pointRepository.update(
        { point_id },
        updateInfo,
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 포인트 삭제
   * --
   * @param point_id
   * @returns
   */
  async deletePoint(point_id: string) {
    try {
      await this.pointRepository.findOneOrFail({ where: { point_id } });
      const result = await this.pointRepository.delete({ point_id });
      return result;
    } catch (e) {
      throw e;
    }
  }
}
