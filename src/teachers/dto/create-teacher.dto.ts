import {ApiProperty} from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateTeacherDto {
    @ApiProperty({
        description: 'Email of teacher, needs to be unique',
        example: 'teacher1@goodschool.moe.edu.sg',
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'Name of teacher',
        example: 'Alex Teo',
    })
    name: string;

    @ApiProperty({
        description: 'Subject the teacher teaches',
        example: 'Mathematics',
    })
    @IsNotEmpty()
    subject: string;

    @ApiProperty({
        description: 'Contact number of teacher',
        example: '91234567',
    })
    @IsNotEmpty()
    contactNumber: string;
}
