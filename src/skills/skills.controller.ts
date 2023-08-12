/*
https://docs.nestjs.com/controllers#controllers
*/


import { SkillsService } from './skills.service';
import { ResponseBody } from 'src/config/response.class';
import { Controller, Get, Post, Body, UseGuards, Put } from '@nestjs/common';
import { Skills } from './skills.schema';
import { AuthGuard } from 'src/auth/auth.guard';
import { SkillsDTO } from './skills.dto';

@Controller('skills')
export class SkillsController {
  constructor(private skillService: SkillsService) {}

  @Get()
  async findAll(): Promise<ResponseBody<Skills[]>> {
    return new ResponseBody<Skills[]>({
      data: await this.skillService.findAll(),
      success: true,
      message: 'Tarea completada con exito',
    });
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() createSkillsDTO: SkillsDTO,
  ): Promise<ResponseBody<Skills>> {
    const skill = await this.skillService.create(createSkillsDTO);
    return new ResponseBody<Skills>({
      success: true,
      message: 'Creación de skill completada con exito',
      data: skill,
    });
  }

  @UseGuards(AuthGuard)
  @Post('/list')
  async createList(
    @Body() createSkillsDTO: SkillsDTO[],
  ): Promise<ResponseBody<Skills[]>> {
    const skills: SkillsDTO[] = [];
    for (const skill of createSkillsDTO) {
      const newSkill = await this.skillService.create(skill);
      skills.push(newSkill);
    }

    return new ResponseBody<Skills[]>({
      success: true,
      message: 'Creación de skills completada con exito',
      data: skills,
    });
  }


  @UseGuards(AuthGuard)
  @Put('/:id_skill')
  async updateSkill(
    @Body() createSkillsDTO: SkillsDTO[],
  ): Promise<ResponseBody<Skills[]>> {
    const skills: SkillsDTO[] = [];
    for (const skill of createSkillsDTO) {
      const newSkill = await this.skillService.create(skill);
      skills.push(newSkill);
    }

    return new ResponseBody<Skills[]>({
      success: true,
      message: 'Creación de skills completada con exito',
      data: skills,
    });
  }
}
