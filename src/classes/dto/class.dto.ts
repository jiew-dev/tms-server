import { ApiProperty } from "@nestjs/swagger";

export class Class {
    @ApiProperty({
        description: 'The level of the class',
        example: 'Primary 1'
    })
    level: string;

    @ApiProperty({
        description: 'The name of the class',
        example: 'Class 1A'
    })
    name: string;

    @ApiProperty({
        description: 'Form teacher identified by email',
        example: 'teacher1@goodschool.moe.edu.sg'
    })
    formTeacherEmail: string;
}