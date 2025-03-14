import { Controller, Get, Post, Body } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher } from './dto/teacher.dto';
import { ListResponse } from 'src/dto/list.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { ApiOkResponsePaginated } from 'src/dto/list-response.decorator';

@Controller('api/teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  @ApiCreatedResponse({
    type: Teacher,
  })
  async create(@Body() data: CreateTeacherDto): Promise<Teacher> {
    return this.teachersService.create(data);
  }

  @Get()
  @ApiOkResponsePaginated(Teacher)
  async findAll(): Promise<ListResponse<Teacher>> {
    const teachers = await this.teachersService.findAll();
    return {
      data: teachers,
    }
  }
}
