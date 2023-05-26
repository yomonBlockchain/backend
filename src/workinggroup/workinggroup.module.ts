import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkingGroup } from '../entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkingGroup])],
  controllers: [],
  providers: [],
})
export class WorkinggroupModule {}
