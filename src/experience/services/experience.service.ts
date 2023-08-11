/*
https://docs.nestjs.com/providers#services
*/
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Experience } from '../schemas/experience.schema';
import { Injectable } from '@nestjs/common';
import { CreateExperienceDTO } from '../dto/experience.dto';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel(Experience.name) private experienceModel: Model<Experience>,
  ) {}

  async findAll(): Promise<Experience[]> {
    return this.experienceModel.find().exec();
  }

  async create(createExperienceDto: CreateExperienceDTO): Promise<Experience> {
    const createdCat = new this.experienceModel(createExperienceDto);
    return createdCat.save();
  }
}
