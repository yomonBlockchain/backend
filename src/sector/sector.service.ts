import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sector } from '../entity';
import { Like, Repository } from 'typeorm';
import { CreateSectorDto, UpdateSectorDto } from './dto';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(Sector)
    private sectorRepository: Repository<Sector>,
  ) {}

  /**
   * 위험구역 정보 등록
   * --
   * @param sectorInfo
   * @returns
   */
  async createSector(sectorInfo: CreateSectorDto) {
    try {
      const result = await this.sectorRepository.save(sectorInfo);
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 위험구역 전체 정보 조회
   * --
   * @returns
   */
  async getSectorList() {
    try {
      const result = await this.sectorRepository.find();
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 위험구역 검색
   * --
   * @param keyword
   * @returns
   */
  async searchSector(keyword: string) {
    try {
      const result = await this.sectorRepository.findBy({
        sector_nm: Like(`%${keyword}%`),
      });
      return result;
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 위험구역 정보 수정
   * --
   * @param sectorInfo
   * @returns
   */
  async updateSector(sectorInfo: UpdateSectorDto) {
    try {
      const { sector_id, ...updateInfo } = sectorInfo;
      const result = await this.sectorRepository.update(
        { sector_id },
        updateInfo,
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 위험구역 정보 삭제
   * --
   * @param sector_id
   * @returns
   */
  async deleteSector(sector_id: string) {
    try {
      const result = await this.sectorRepository.delete(sector_id);
      return result;
    } catch (e) {
      throw e;
    }
  }
}
