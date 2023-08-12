import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ExperienceDocument = HydratedDocument<Skills>;

@Schema({ collection: 'skills' })
export class Skills {
  @Prop({ required: true, unique: true })
  skill: string;

  @Prop({
    type: Number,
    required: true,
    min: 0,
    max: 100,
  })
  percentage: number;

  @Prop([String])
  knowledge: string[];
}

export const SkillsSchema = SchemaFactory.createForClass(Skills);
