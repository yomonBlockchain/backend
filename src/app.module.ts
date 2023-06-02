import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { DbModule } from './db/db.module';
import { DbService } from './db/db.service';
import { EventModule } from './event/event.module';
import { GroupModule } from './group/group.module';
import { GuardModule } from './guard/guard.module';
import { KeeperModule } from './keeper/keeper.module';
import { PatrolModule } from './patrol/patrol.module';
import { PointModule } from './point/point.module';
import { SectorModule } from './sector/sector.module';
import { TrackModule } from './track/track.module';
import { PatrolCourseModule } from './patrolcourse/patrolcourse.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [DbModule],
      useClass: DbService,
      inject: [DbService],
    }),
    AdminModule,
    AuthModule,
    CourseModule,
    EventModule,
    GroupModule,
    GuardModule,
    KeeperModule,
    PatrolModule,
    PointModule,
    SectorModule,
    TrackModule,
    PatrolCourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
