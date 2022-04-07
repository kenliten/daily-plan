import { Module } from '@nestjs/common';
import { ClassroomLayoutsService } from './classroom-layouts.service';
import { ClassroomLayoutsController } from './classroom-layouts.controller';

@Module({
  controllers: [ClassroomLayoutsController],
  providers: [ClassroomLayoutsService]
})
export class ClassroomLayoutsModule {}
