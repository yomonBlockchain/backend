import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Track } from '../entity';
import { Repository } from 'typeorm';
import { CreateTrackDto, UpdateTrackDto } from './dto';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track)
    private trackRepository: Repository<Track>,
  ) {}

  async createTrack(trackInfo: CreateTrackDto) {
    try {
      const result = await this.trackRepository.save(trackInfo);
      return result;
    } catch (e) {
      throw e;
    }
  }

  async getTrackList(course_id: string) {
    try {
      const result = await this.trackRepository.find({ where: { course_id } });
      return result;
    } catch (e) {
      throw e;
    }
  }

  async updateTrack(trackInfo: UpdateTrackDto) {
    try {
      const { track_id, ...updateInfo } = trackInfo;
      const result = await this.trackRepository.update(
        { track_id },
        updateInfo,
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  async deleteTrack(track_id: string) {
    try {
      const result = await this.trackRepository.delete(track_id);
      return result;
    } catch (e) {
      throw e;
    }
  }
}
