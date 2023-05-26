import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon from 'argon2';
import { Repository } from 'typeorm';
import { Admin } from '../entity';
import { CreateAdminDto, UpdateAdminDto } from './dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  /**
   * 관리자 정보 등록
   * --
   * @param adminInfo
   * @returns
   */
  async createAdmin(adminInfo: CreateAdminDto) {
    try {
      const { admin_login_pw } = adminInfo;
      const hash = await argon.hash(admin_login_pw);
      const result = await this.adminRepository.save({
        ...adminInfo,
        admin_login_pw: hash,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 관리자 전체 목록 조회
   * --
   * @returns
   */
  async getAdminList() {
    try {
      const result = await this.adminRepository.find();
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 관리자 정보 수정
   * --
   * @param adminInfo
   * @returns
   */
  async updateAdmin(adminInfo: UpdateAdminDto) {
    try {
      const { admin_id, ...updateInfo } = adminInfo;
      if (updateInfo.admin_login_pw) {
        updateInfo.admin_login_pw = await argon.hash(updateInfo.admin_login_pw);
      }

      const result = await this.adminRepository.update(
        { admin_id },
        updateInfo,
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 관리자 정보 삭제
   * --
   * @param admin_id
   * @returns
   */
  async deleteAdmin(admin_id: string) {
    try {
      await this.adminRepository.findOneOrFail({ where: { admin_id } });
      const result = await this.adminRepository.delete({ admin_id });
      return result;
    } catch (e) {
      throw e;
    }
  }
}
