/*
https://docs.nestjs.com/guards#guards
*/

import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { ResponseBody } from 'src/config/response.class';
import { config } from 'src/config/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    const exception = new UnauthorizedException(
      new ResponseBody({
        message: 'No pudimos autenticar tu token',
        success: false,
      }),
    );
    if (!token) {
      throw exception;
    }

    try {
      const payload = this.jwtService.verify(token, {
        secret: config().auth.secret,
      });
      request['user'] = payload;
    } catch (error) {
      throw exception;
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
