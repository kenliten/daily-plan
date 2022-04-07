import { Injectable } from '@nestjs/common';
import { CreateClassroomLayoutDto } from './dto/create-classroom-layout.dto';
import { UpdateClassroomLayoutDto } from './dto/update-classroom-layout.dto';

@Injectable()
export class ClassroomLayoutsService {
  create(createClassroomLayoutDto: CreateClassroomLayoutDto) {
    return 'This action adds a new classroomLayout';
  }

  findAll() {
    return `This action returns all classroomLayouts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classroomLayout`;
  }

  update(id: number, updateClassroomLayoutDto: UpdateClassroomLayoutDto) {
    return `This action updates a #${id} classroomLayout`;
  }

  remove(id: number) {
    return `This action removes a #${id} classroomLayout`;
  }
}
