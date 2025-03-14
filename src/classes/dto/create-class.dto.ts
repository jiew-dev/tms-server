import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateClassDto {
    @ApiProperty({
        description: 'The level of the class',
        example: 'Primary 1'
    })
    @IsNotEmpty()
    level: string;

    @ApiProperty({
        description: 'The name of the class',
        example: 'Class 1A'
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'Form teacher identified by email',
        example: 'teacher1@goodschool.moe.edu.sg'
    })
    @IsEmail()
    @IsNotEmpty()
    formTeacherEmail: string;
}
