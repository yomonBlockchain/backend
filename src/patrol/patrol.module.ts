import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patrol } from '../entity';
import { PatrolController } from './patrol.controller';
import { PatrolService } from './patrol.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patrol])],
  controllers: [PatrolController],
  providers: [PatrolService],
})
export class PatrolModule {}
