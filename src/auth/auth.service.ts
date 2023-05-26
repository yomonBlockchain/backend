import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon from 'argon2';
import { Repository } from 'typeorm';
import { Admin, Guard, Keeper } from '../entity';
import {
  AdminSigninDto,
  AdminSignupDto,
  GuardSignInDto,
  GuardSignUpDto,
  KeeperSignInDto,
  KeeperSignUpDto,
} from './dto';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private config: ConfigService,
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
    @InjectRepository(Guard)
    private guardRepository: Repository<Guard>,
    @InjectRepository(Keeper)
    private keeperRepository: Repository<Keeper>,
  ) {}

  // ---------------------------관리자---------------------------
  /**
   * 관리자 회원가입
   * --
   * @param adminInfo
   * @returns
   */
  async signupAdmin(adminInfo: AdminSignupDto) {
    try {
      const { admin_login_id, admin_login_pw } = adminInfo;
      const hash = await argon.hash(admin_login_pw);
      const check = await this.adminRepository.findOne({
        where: { admin_login_id: admin_login_id },
      });

      if (check) {
        throw new Error('이미 가입된 아이디입니다.');
      }

      const result = await this.adminRepository.save({
        ...adminInfo,
        admin_login_pw: hash,
      });
      delete result.admin_login_pw;

      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 관리잘 로그인
   * --
   * @param loginInfo
   * @returns
   */
  async signinAdmin(loginInfo: AdminSigninDto) {
    try {
      const { admin_login_id } = loginInfo;
      const admin = await this.adminRepository.findOne({
        where: { admin_login_id },
      });
      if (!admin) {
        throw new ForbiddenException('Credentials incorrect');
      }

      // compare password
      const pwMatches = await argon.verify(
        admin.admin_login_pw,
        loginInfo.admin_login_pw,
      );

      // if password incoreect throw exception
      if (!pwMatches) {
        throw new ForbiddenException('회원정보가 일치하지 않습니다.');
      }

      delete admin.admin_login_pw;

      const access_token = await this.generateToken(admin.admin_id, 'ADMIN');
      const login_data = {
        ...admin,
        ...access_token,
      };
      return login_data;
    } catch (e) {
      throw e;
    }
  }

  // ---------------------------키퍼---------------------------
  /**
   * 키퍼 회원가입
   * --
   * @param keeperInfo
   * @returns
   */
  async signupKeeper(keeperInfo: KeeperSignUpDto) {
    try {
      const { keeper_login_id, keeper_login_pw } = keeperInfo;
      const hash = await argon.hash(keeper_login_pw);
      const check = await this.keeperRepository.findOne({
        where: { keeper_login_id },
      });

      if (check) {
        throw new Error('이미 가입된 아이디입니다.');
      }

      const result = await this.keeperRepository.save({
        ...keeperInfo,
        keeper_login_pw: hash,
      });
      delete result.keeper_login_pw;

      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 키퍼 로그인
   * --
   * @param
   * @returns
   */
  async signinKeeper(loginInfo: KeeperSignInDto) {
    try {
      const { keeper_login_id } = loginInfo;
      const keeper = await this.keeperRepository.findOne({
        where: { keeper_login_id },
      });
      if (!keeper) {
        throw new ForbiddenException('Credentials incorrect');
      }

      // compare password
      const pwMatches = await argon.verify(
        keeper.keeper_login_pw,
        loginInfo.keeper_login_pw,
      );

      // if password incoreect throw exception
      if (!pwMatches) {
        throw new ForbiddenException('회원정보가 일치하지 않습니다.');
      }

      delete keeper.keeper_login_pw;

      const access_token = await this.generateToken(
        keeper.keeper_login_id,
        'KEEPER',
      );
      const login_data = {
        ...keeper,
        ...access_token,
      };
      return login_data;
    } catch (e) {
      throw e;
    }
  }

  // ---------------------------가드---------------------------
  /**
   * 가드 회원가입
   * --
   * @param guardInfo
   * @returns
   */
  async signupGuard(guardInfo: GuardSignUpDto) {
    try {
      const { guard_login_id, guard_login_pw } = guardInfo;
      const hash = await argon.hash(guard_login_pw);
      const check = await this.guardRepository.findOne({
        where: { guard_login_id },
      });

      if (check) {
        throw new Error('이미 가입된 아이디입니다.');
      }

      const result = await this.guardRepository.save({
        ...guardInfo,
        guard_login_pw: hash,
      });
      delete result.guard_login_pw;

      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 가드 로그인
   * --
   * @param
   * @returns
   */
  async signinGuard(loginInfo: GuardSignInDto) {
    try {
      const { guard_login_id } = loginInfo;
      const guard = await this.guardRepository.findOne({
        where: { guard_login_id },
      });
      if (!guard) {
        throw new ForbiddenException('Credentials incorrect');
      }

      // compare password
      const pwMatches = await argon.verify(
        guard.guard_login_pw,
        loginInfo.guard_login_pw,
      );

      // if password incoreect throw exception
      if (!pwMatches) {
        throw new ForbiddenException('회원정보가 일치하지 않습니다.');
      }

      delete guard.guard_login_pw;

      const access_token = await this.generateToken(
        guard.guard_login_id,
        'GUARD',
      );
      const login_data = {
        ...guard,
        ...access_token,
      };
      return login_data;
    } catch (e) {
      throw e;
    }
  }

  /**
   * 토큰 생성
   * --
   * @param id
   * @param type
   * @returns
   */
  async generateToken(
    id: string,
    type: string = 'ADMIN',
  ): Promise<{ access_token: string }> {
    const payload = {
      id: id,
      type: type,
    };

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '24h',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }

  /**
   * 토큰 인증
   * --
   * @param authorization
   * @returns
   */
  async verify(authorization: string) {
    try {
      const token = authorization.replace('Bearer ', '');
      const result = this.jwt.decode(token);
      return result;
    } catch (e) {
      throw e;
    }
  }
}
