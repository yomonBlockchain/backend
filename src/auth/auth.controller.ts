import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import {
  AdminSigninDto,
  AdminSignupDto,
  GuardSignInDto,
  GuardSignUpDto,
  KeeperSignInDto,
  KeeperSignUpDto,
} from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('admin/signup')
  async signUpAdmin(@Res() res: Response, @Body() adminInfo: AdminSignupDto) {
    try {
      const result = await this.authService.signupAdmin(adminInfo);
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'success',
        data: result,
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: e.message,
      });
    }
  }

  @Post('admin/signin')
  async signInAdmin(@Res() res: Response, @Body() loginInfo: AdminSigninDto) {
    try {
      const result = await this.authService.signinAdmin(loginInfo);
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'success',
        data: result,
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: e.message,
      });
    }
  }

  @Post('guard/signup')
  async signUpGuard(@Res() res: Response, @Body() guardInfo: GuardSignUpDto) {
    try {
      const result = await this.authService.signupGuard(guardInfo);
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'success',
        data: result,
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: e.message,
      });
    }
  }

  @Post('guard/signin')
  async signInGuard(@Res() res: Response, @Body() loginInfo: GuardSignInDto) {
    try {
      const result = await this.authService.signinGuard(loginInfo);
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'success',
        data: result,
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: e.message,
      });
    }
  }

  @Post('keeper/signup')
  async signUpKeeper(
    @Res() res: Response,
    @Body() keeperInfo: KeeperSignUpDto,
  ) {
    try {
      const result = await this.authService.signupKeeper(keeperInfo);
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'success',
        data: result,
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: e.message,
      });
    }
  }

  @Post('keeper/signin')
  async signInKeeper(@Res() res: Response, @Body() loginInfo: KeeperSignInDto) {
    try {
      const result = await this.authService.signinKeeper(loginInfo);
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'success',
        data: result,
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: e.message,
      });
    }
  }
}
