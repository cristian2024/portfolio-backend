/*
https://docs.nestjs.com/providers#services
*/
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from '../schemas/company.schema';
import { Injectable } from '@nestjs/common';


@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
  ) {}

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  // async create(createExperienceDto: CreateExperienceDTO): Promise<Company> {
  //   const createdCat = new this.companyModel(createExperienceDto);
  //   return createdCat.save();
  // }
}
