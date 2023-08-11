import { ExperienceController } from '../controller/experience.controller';
import { ExperienceService } from '../services/experience.service';
import { Experience, ExperienceSchema } from '../schemas/experience.schema';
import { MongooseModule } from '@nestjs/mongoose';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Experience.name, schema: ExperienceSchema },
    ]),
  ],
  controllers: [ExperienceController],
  providers: [ExperienceService],
})
export class ExperienceModule {}
