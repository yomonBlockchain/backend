import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkingGroup } from '../entity';
import { Repository } from 'typeorm';
import { CreateWorkingGroupDto, UpdateWorkingGroupDto } from './dto';

@Injectable()
export class WorkinggroupService {
  constructor(
    @InjectRepository(WorkinggroupService)
    private WorkingGroupRepository: Repository<WorkingGroup>,
  ) {}

  async createWorkingGroup(WorkingGroupInfo: CreateWorkingGroupDto) {
    try {
      const result = await this.WorkingGroupRepository.save(WorkingGroupInfo);
      return result;
    } catch (e) {
      throw e;
    }
  }

  async getWorkingGroupList(course_id: string) {
    try {
      const result = await this.WorkingGroupRepository.find();
      return result;
    } catch (e) {
      throw e;
    }
  }

  async updateWorkingGroup(WorkingGroupInfo: UpdateWorkingGroupDto) {
    try {
      const { working_group_id, ...updateInfo } = WorkingGroupInfo;
      const result = await this.WorkingGroupRepository.update(
        { working_group_id },
        updateInfo,
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  async deleteWorkingGroup(WorkingGroup_id: string) {
    try {
      const result = await this.WorkingGroupRepository.delete(WorkingGroup_id);
      return result;
    } catch (e) {
      throw e;
    }
  }
}
