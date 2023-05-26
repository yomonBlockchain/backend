import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Keeper } from '../entity';
import { CreateKeeperDto, UpdaetKeeperDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class KeeperService {
  constructor(
    @InjectRepository(Keeper)
    private keeperRepository: Repository<Keeper>,
  ) {}

  /**
   * 키퍼 등록
   * --
   * @param keeperInfo
   * @returns
   */
  async createKeeper(keeperInfo: CreateKeeperDto) {
    try {
      const { keeper_login_id, keeper_login_pw } = keeperInfo;
      const hash = await argon.hash(keeper_login_pw);
      const check = await this.keeperRepository.findOne({
        where: { keeper_login_id },
      });

      if (check) {
        throw new Error('이미 가입된 아이디입니다.');
      }

      const result = await this.keeperRepository.save({
        ...keeperInfo,
        keeper_login_pw: hash,
      });
      delete result.keeper_login_pw;

      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 키퍼 전체 목록 조회
   * --
   * @returns
   */
  async getKeeperList() {
    try {
      const result = await this.keeperRepository.find();
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 키퍼 상세 정보 조회
   * FIXME 추후 상세 정보 구현
   * --
   * @param keeper_id
   * @returns
   */
  async getKeeperDetail(keeper_id: string) {
    try {
      const result = await this.keeperRepository.findOneOrFail({
        where: { keeper_id },
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 키퍼 정보 수정
   * --
   * @param keeperInfo
   * @returns
   */
  async updateKeeper(keeperInfo: UpdaetKeeperDto) {
    try {
      const { keeper_id, ...updateInfo } = keeperInfo;
      if (updateInfo.keeper_login_pw) {
        updateInfo.keeper_login_pw = await argon.hash(
          updateInfo.keeper_login_pw,
        );
      }
      const result = await this.keeperRepository.update(
        { keeper_id },
        updateInfo,
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 키퍼 정보 삭제
   * --
   * @param keeper_id
   * @returns
   */
  async deleteKeeper(keeper_id: string) {
    try {
      const result = await this.keeperRepository.delete(keeper_id);
      return result;
    } catch (e) {
      throw e;
    }
  }
}
