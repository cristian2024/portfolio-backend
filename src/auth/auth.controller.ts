/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './auth.dto';
import { ResponseBody } from 'src/config/response.class';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('jwt')
  generateJWT(@Body() authDTO: AuthDTO): ResponseBody<string> {
    const token = this.authService.generateJWT(authDTO);
    return new ResponseBody<string>({
      data: token,
      message: 'Token generado de manera exitosa',
      success: true,
    });
  }
}
