import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';
import { PrismaModule } from './prisma.module';
import { ClassesModule } from './classes/classes.module';

@Module({
  imports: [TeachersModule, PrismaModule, ClassesModule],
  providers: [AppService],
})
export class AppModule {}
