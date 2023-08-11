/*
https://docs.nestjs.com/controllers#controllers
*/
import { ResponseBody } from 'src/config/response.class';
import { CreateExperienceDTO } from '../dto/experience.dto';
import { Experience } from '../schemas/experience.schema';
import { ExperienceService } from '../services/experience.service';
import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('experiences')
export class ExperienceController {
  constructor(private experienceService: ExperienceService) {}

  @Get()
  async findAll(): Promise<ResponseBody<Experience[]>> {
    return new ResponseBody<Experience[]>({
      data: await this.experienceService.findAll(),
      success: true,
      message: 'Tarea completada con exito',
    });
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() createExperienceDTO: CreateExperienceDTO,
  ): Promise<ResponseBody<null>> {
    await this.experienceService.create(createExperienceDTO);
    return new ResponseBody<null>({
      success: true,
      message: 'Creación de experiencia completada con exito',
      data: null,
    });
  }
}
