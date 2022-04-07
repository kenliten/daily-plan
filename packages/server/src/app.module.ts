import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonPlansModule } from './lesson-plans/lesson-plans.module';
import { ActivitiesModule } from './activities/activities.module';
import { SectionsModule } from './sections/sections.module';
import { ClassroomLayoutsModule } from './classroom-layouts/classroom-layouts.module';

@Module({
  imports: [LessonPlansModule, ActivitiesModule, SectionsModule, ClassroomLayoutsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
