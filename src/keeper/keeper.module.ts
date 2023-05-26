import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Keeper } from '../entity';
import { KeeperController } from './keeper.controller';
import { KeeperService } from './keeper.service';

@Module({
  imports: [TypeOrmModule.forFeature([Keeper])],
  controllers: [KeeperController],
  providers: [KeeperService],
})
export class KeeperModule {}
