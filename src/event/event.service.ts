import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from '../entity';
import { Like, Repository } from 'typeorm';
import { CreateEventDto, UpdateEventDto } from './dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  /**
   * 이벤트 정보 등록
   * --
   * @param eventInfo
   * @returns
   */
  async createEvent(eventInfo: CreateEventDto) {
    try {
      const result = await this.eventRepository.save(eventInfo);
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 이벤트 목록 조회
   * --
   * @returns
   */
  async getEventList() {
    try {
      const result = await this.eventRepository.find();
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 이벤트 검색
   * --
   * @param keyword
   */
  async searchEvent(keyword: string) {
    try {
      const result = await this.eventRepository.findBy({
        event_title: Like(`%${keyword}%`),
      });
    } catch (e) {
      throw e;
    }
  }

  /**
   * 이벤트 정보 수정
   * --
   * @param eventInfo
   * @returns
   */
  async updateEvent(eventInfo: UpdateEventDto) {
    try {
      const { event_id, ...updateInfo } = eventInfo;
      const result = await this.eventRepository.update(
        { event_id },
        updateInfo,
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 이벤트 정보 삭제
   * --
   * @param event_id
   * @returns
   */
  async deleteEvent(event_id: string) {
    try {
      await this.eventRepository.findOneOrFail({ where: { event_id } });
      const result = await this.eventRepository.delete(event_id);
      return result;
    } catch (e) {
      throw e;
    }
  }
}
