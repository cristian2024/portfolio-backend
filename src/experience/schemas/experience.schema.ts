import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Company } from 'src/companies/schemas/company.schema';

export type ExperienceDocument = HydratedDocument<Experience>;

@Schema({ collection: 'experience' })
export class Experience {
  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  experience: string;

  @Prop({ type: Date, required: true })
  start_date: Date;

  @Prop({ type: Date, required: false })
  end_date: Date;

  @Prop([String])
  tasks: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
  company_id: Company;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
