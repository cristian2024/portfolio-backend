import { MongooseModule } from '@nestjs/mongoose';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Skills, SkillsSchema } from './skills.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Skills.name, schema: SkillsSchema }]),
  ],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}
