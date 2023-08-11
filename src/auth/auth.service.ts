/*
https://docs.nestjs.com/providers#services
*/
import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { config } from 'src/config/config';
import { AuthDTO } from './auth.dto';

@Injectable()
export class AuthService {
  private key: string = '_jwtKey';

  constructor(private jwtService: JwtService) {}

  validateCredentials(params: { email: string; password: string }): boolean {
    return (
      config().auth.email === params.email &&
      config().auth.password === params.password
    );
  }

  generateJWT(authDTO: AuthDTO): string | undefined {
    try {
      if (
        !this.validateCredentials({
          email: authDTO.email,
          password: authDTO.password,
        })
      ) {
        throw new UnauthorizedException();
      }
      const payload = { sub: this.key, username: authDTO.email };

      const token = this.jwtService.sign(payload);
      return token;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
