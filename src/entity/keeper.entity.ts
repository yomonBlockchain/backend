import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 't_keeper' })
export class Keeper {
  @PrimaryGeneratedColumn('uuid')
  keeper_id: string;

  @Column()
  keeper_nm: string;

  @Column()
  keeper_login_id: string;

  @Column()
  keeper_login_pw: string;

  @Column()
  keeper_tel: string;

  @Column()
  keeper_region: string;

  @Column()
  keeper_office: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;
}
