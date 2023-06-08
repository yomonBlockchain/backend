import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guard } from '../entity';
import {
  CountGroupGuardPatrolDto,
  CountGuardPatrolDto,
  CreateGuardDto,
  UpdateGuardDto,
} from './dto';
import * as argon from 'argon2';

@Injectable()
export class GuardService {
  constructor(
    @InjectRepository(Guard)
    private guardRepository: Repository<Guard>,
  ) {}

  /**
   * 가드 등록
   * --
   * @param guardInfo
   * @returns
   */
  async createGuard(guardInfo: CreateGuardDto) {
    try {
      const { guard_login_id, guard_login_pw } = guardInfo;
      const hash = await argon.hash(guard_login_pw);
      const check = await this.guardRepository.findOne({
        where: { guard_login_id },
      });

      if (check) {
        throw new Error('이미 가입된 아이디입니다.');
      }

      const result = await this.guardRepository.save({
        ...guardInfo,
        guard_login_pw: hash,
      });
      delete result.guard_login_pw;

      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 가드 전체 목록 조회
   * --
   * @returns
   */
  async getGuardList() {
    try {
      const result = await this.guardRepository.find();
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 가드 상세 정보 조회
   * FIXME 추후 수정 예정(가드 상세정보)
   * --
   * @param guard_id
   * @returns
   */
  async getGuardDetail(guard_id: string) {
    try {
      const result = await this.guardRepository.findOneOrFail({
        where: { guard_id },
      });
      // 추후 구현 예정
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 가드 정보 수정
   * --
   * @param guardInfo
   * @returns
   */
  async updateGuard(guardInfo: UpdateGuardDto) {
    try {
      const { guard_id, ...updateInfo } = guardInfo;
      if (updateInfo.guard_login_pw) {
        updateInfo.guard_login_pw = await argon.hash(updateInfo.guard_login_pw);
      }
      const result = await this.guardRepository.update({}, updateInfo);
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 가드 순찰 카운트
   * --
   * @param guardInfo
   * @returns
   */
  async countGuardPatrol(guardInfo: CountGuardPatrolDto) {
    try {
      const { target_guard_id } = guardInfo;
      const target = await this.guardRepository.findOneOrFail({
        where: { guard_id: target_guard_id },
      });
      target.guard_count_patrol += 1;

      const { guard_id, ...updateInfo } = target;
      const result = await this.guardRepository.update(
        { guard_id },
        updateInfo,
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 그룹 가드 순찰 카운트
   * --
   * @param groupguardInfo
   * @returns
   */
  async countGroupGuardPatrol(groupguardInfo: CountGroupGuardPatrolDto) {
    try {
      const { group_guards } = groupguardInfo;
      const parsedguard = group_guards.split(', ');
      for (const item of parsedguard) {
        let guardInfo = {
          target_guard_id: item,
        };
        this.countGuardPatrol(guardInfo);
      }
      return;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 가드 정보 삭제
   * --
   * @param guard_id
   * @returns
   */
  async deleteGuard(guard_id: string) {
    try {
      const result = await this.guardRepository.delete({ guard_id });
      return result;
    } catch (e) {
      throw e;
    }
  }
}
