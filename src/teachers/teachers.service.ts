import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { Teacher } from './dto/teacher.dto';

@Injectable()
export class TeachersService {
  constructor(
    private prisma: PrismaService,
  ) {}
  
  async create(data: CreateTeacherDto) {
    try {
      return (await this.prisma.teacher.create({ data }));
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: "This email is already in use",
          }, HttpStatus.BAD_REQUEST, {
            cause: e,
          });
        }
      }
      throw e;
    }
    
  }

  async findAll(): Promise<Teacher[]> {
    return await this.prisma.teacher.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        subject: true,
        contactNumber: true,
        formClass: true,
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
