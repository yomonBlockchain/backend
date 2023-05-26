import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guard } from '../entity';
import { GuardController } from './guard.controller';
import { GuardService } from './guard.service';

@Module({
  imports: [TypeOrmModule.forFeature([Guard])],
  controllers: [GuardController],
  providers: [GuardService],
})
export class GuardModule {}
