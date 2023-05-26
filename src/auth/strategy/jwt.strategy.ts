import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { Admin, Guard, Keeper } from '../../entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    config: ConfigService,
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
    @InjectRepository(Keeper) private keeperRepository: Repository<Keeper>,
    @InjectRepository(Guard) private guardRepository: Repository<Guard>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { id: string; type: string }) {
    console.log(payload);
    switch (payload.type) {
      case 'ADMIN':
        const adminData = await this.adminRepository.findOneOrFail({
          where: { admin_id: payload.id },
        });
        delete adminData.admin_login_pw;
        return adminData;
      case 'KEEPER':
        const keeperData = await this.keeperRepository.findOneOrFail({
          where: { keeper_login_id: payload.id },
        });
        delete keeperData.keeper_login_pw;
        return keeperData;
      case 'GUARD':
        const guardData = await this.guardRepository.findOneOrFail({
          where: { guard_login_id: payload.id },
        });
        delete guardData.guard_login_pw;
        return guardData;
      default:
        return false;
    }
  }
}
