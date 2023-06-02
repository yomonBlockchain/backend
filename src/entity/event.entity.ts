import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Group } from './group.entity';

export enum EVENT_TYPE {
  V = 'V',
  S = 'S',
  R = 'R',
  ETC = 'ETC',
}

@Entity({ name: 't_event' })
export class Event {
  @PrimaryGeneratedColumn('uuid')
  event_id: string;

  @Column()
  group_id: string;

  @Column()
  event_title: string;

  @Column()
  event_desc: string;

  @Column({
    type: 'enum',
    enum: EVENT_TYPE,
    default: EVENT_TYPE.ETC,
  })
  event_type: EVENT_TYPE;

  @Column()
  event_img: string;

  @Column()
  event_lat: string;

  @Column()
  event_lon: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @ManyToOne(() => Group, (group) => group.group_id, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'group_id' })
  group: Group;
}
