import { Controller, Post, Body, Headers } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { BaseController } from '@/core';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('授权')
@Controller('')
export class AuthController extends BaseController {
  constructor(private readonly authService: AuthService) {
    super();
  }

  @ApiOperation({ description: '登录' })
  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const res = await this.authService.login(loginDto);
    return this.success(res);
  }

  @ApiOperation({ description: '登出' })
  @Post('/logout')
  async logout(@Headers('token') token) {
    const res = await this.authService.logout(token);
    return this.success(res);
  }
}
