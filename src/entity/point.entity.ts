import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum POINT_TYPE {
  POINT = 'POINT',
  POLICE = 'POLICE',
  FIRESTATION = 'FIRESTATION',
}

@Entity({ name: 't_point' })
export class Point {
  @PrimaryGeneratedColumn('uuid')
  point_id: string;

  @Column()
  point_nm: string;

  @Column()
  point_desc: string;

  @Column()
  point_lat: string;

  @Column()
  point_lon: string;

  @Column()
  point_score: number;

  @Column()
  point_img: string;

  @Column({ type: 'enum', enum: POINT_TYPE, default: POINT_TYPE.POINT })
  point_type: POINT_TYPE;
}
