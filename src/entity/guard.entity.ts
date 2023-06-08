import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 't_guard' })
export class Guard {
  @PrimaryGeneratedColumn('uuid')
  guard_id: string;

  @Column()
  guard_nm: string;

  @Column()
  guard_login_id: string;

  @Column()
  guard_login_pw: string;

  @Column()
  guard_ether_address: string;

  @Column({ default: 0 })
  guard_count_patrol: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;
}
