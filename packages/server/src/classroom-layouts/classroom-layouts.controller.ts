import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassroomLayoutsService } from './classroom-layouts.service';
import { CreateClassroomLayoutDto } from './dto/create-classroom-layout.dto';
import { UpdateClassroomLayoutDto } from './dto/update-classroom-layout.dto';

@Controller('classroom-layouts')
export class ClassroomLayoutsController {
  constructor(private readonly classroomLayoutsService: ClassroomLayoutsService) {}

  @Post()
  create(@Body() createClassroomLayoutDto: CreateClassroomLayoutDto) {
    return this.classroomLayoutsService.create(createClassroomLayoutDto);
  }

  @Get()
  findAll() {
    return this.classroomLayoutsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classroomLayoutsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassroomLayoutDto: UpdateClassroomLayoutDto) {
    return this.classroomLayoutsService.update(+id, updateClassroomLayoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classroomLayoutsService.remove(+id);
  }
}
