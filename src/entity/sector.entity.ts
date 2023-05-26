import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 't_sector' })
export class Sector {
  @PrimaryGeneratedColumn('uuid')
  sector_id: string;

  @Column()
  sector_nm: string;

  @Column()
  sector_desc: string;

  @Column()
  sector_lat: string;

  @Column()
  sector_lon: string;

  @Column()
  sector_img: string;

  @Column()
  sector_grade: number;

  @Column()
  sector_boundary: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;
}
