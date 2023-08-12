/*
https://docs.nestjs.com/providers#services
*/



// @Injectable()
// export class SkillsService {}


import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { SkillsDTO } from './skills.dto';
import { Skills } from './skills.schema';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel(Skills.name) private skillsModel: Model<Skills>,
  ) {}

  async findAll(): Promise<Skills[]> {
    return this.skillsModel.find().exec();
  }

  async create(createSkillDto: SkillsDTO): Promise<Skills> {
    const createdSkill = new this.skillsModel(createSkillDto);
    await createdSkill.save();
    return createdSkill;
  }
}
