import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ADMIN_DIV {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
}

@Entity({ name: 't_admin' })
export class Admin {
  @PrimaryGeneratedColumn('uuid')
  admin_id: string;

  @Column()
  admin_nm: string;

  @Column()
  admin_login_id: string;

  @Column()
  admin_login_pw: string;

  @Column({
    type: 'enum',
    enum: ADMIN_DIV,
    default: ADMIN_DIV.MANAGER,
  })
  admin_div: ADMIN_DIV;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;
}
