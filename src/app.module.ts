import { ExperienceModule } from './experience/modules/experience.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import * as Joi from 'joi';
import { config } from './config/config';

import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { environments } from './config/environments';
import { MongooseModule } from '@nestjs/mongoose';
import { getDbConnectionRoute } from './config/db.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] ?? '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),

        PORT: Joi.number().integer(),
      }),
    }),

    MongooseModule.forRoot(getDbConnectionRoute()),
    AuthModule,
    ExperienceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
