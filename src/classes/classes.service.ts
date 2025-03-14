import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { PrismaService } from 'src/prisma.service';
import { ListResponse } from 'src/dto/list.dto';
import { Class } from './dto/class.dto';

@Injectable()
export class ClassesService {
  constructor(
      private prisma: PrismaService,
    ) {}

  async create(createClassDto: CreateClassDto) {
    const formTeacher = await this.prisma.teacher.findUnique({
      where: {
        email: createClassDto.formTeacherEmail
      },
      include: {
        formClass: true
      }
    });
    console.log("formTeacher", formTeacher);
    if (!formTeacher) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Form teacher not found',
      }, HttpStatus.BAD_REQUEST);
    }

    if (formTeacher.formClass) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Form teacher already assigned to a class',
      }, HttpStatus.BAD_REQUEST);
    }

    return this.prisma.class.create({
      data: {
        name: createClassDto.name,
        level: createClassDto.level,
        formTeacher: {
          connect: {
            id: formTeacher.id
          }
        }
      }
    });
  }

  async findAll(): Promise<ListResponse<Class>> {
    const classes = await this.prisma.class.findMany({
      include: {
        formTeacher: {
          select: {
            name: true, 
            email: true,
         }
        }
      }
    });
    return {
      data: classes.map(c => ({
        formTeacherEmail: c.formTeacher.email,
        ...c
      })),
    }
  }
}
