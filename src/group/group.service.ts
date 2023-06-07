import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from '../entity';
import { Repository } from 'typeorm';
import { CreateGroupDto, JoinGroupDto, UpdateGroupDto } from './dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  /**
   * 그룹 등록
   * --
   * @param groupInfo
   * @returns
   */
  async createGroup(groupInfo: CreateGroupDto) {
    try {
      const result = await this.groupRepository.save(groupInfo);
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 그룹 조회
   * --
   * @returns
   */
  async getGroupList() {
    try {
      const result = await this.groupRepository.find();
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 그룹 상세 정보 조회
   * --
   * @param group_id
   * @returns
   */
  async getGroupDetail(group_id: string) {
    try {
      const result = await this.groupRepository.findOneOrFail({
        where: { group_id },
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 그룹 정보 수정
   * --
   * @param groupInfo
   * @returns
   */
  async updateGroup(groupInfo: UpdateGroupDto) {
    try {
      const { group_id, ...updateInfo } = groupInfo;
      const result = await this.groupRepository.update(
        { group_id },
        updateInfo,
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 그룹 참가
   * --
   * @param joinGroupInfo
   * @returns
   */
  async joinGroup(joinGroupInfo: JoinGroupDto) {
    try {
      const { target_group_id, guard_id } = joinGroupInfo;
      const target = await this.groupRepository.findOneOrFail({
        where: { group_id: target_group_id },
      });
      const updated_member = target.group_member + ', ' + guard_id;
      target.group_member = updated_member;

      const { group_id, ...updateInfo } = target;
      const result = await this.groupRepository.update(
        { group_id },
        updateInfo,
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 그룹 정보 삭제
   * --
   * @param group_id
   * @returns
   */
  async deleteGroup(group_id: string) {
    try {
      const result = await this.groupRepository.delete(group_id);
      return result;
    } catch (e) {
      throw e;
    }
  }
}
