import { PartialType } from '@nestjs/mapped-types';
import { CreateClassroomLayoutDto } from './create-classroom-layout.dto';

export class UpdateClassroomLayoutDto extends PartialType(CreateClassroomLayoutDto) {}
