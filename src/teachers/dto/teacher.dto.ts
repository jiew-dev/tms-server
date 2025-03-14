import { ApiProperty } from "@nestjs/swagger";

export class Teacher {
    @ApiProperty({
        description: 'The ID of the teacher',
    })
    id: string;

    @ApiProperty({
        description: 'The name of the teacher',
        example: 'John Doe'
    })
    name: string;
    @ApiProperty({
        description: 'The email of the teacher',
        example: 'teacher1@goodschool.moe.edu.sg'
    })
    email: string;
    @ApiProperty({
        description: 'The subject that the teacher teaches',
        example: 'Mathematics'
    })
    subject: string;
    @ApiProperty({
        description: 'The contact number of the teacher',
        example: '12345678'
    })
    contactNumber: string;
}