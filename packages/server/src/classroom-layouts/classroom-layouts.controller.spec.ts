import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomLayoutsController } from './classroom-layouts.controller';
import { ClassroomLayoutsService } from './classroom-layouts.service';

describe('ClassroomLayoutsController', () => {
  let controller: ClassroomLayoutsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassroomLayoutsController],
      providers: [ClassroomLayoutsService],
    }).compile();

    controller = module.get<ClassroomLayoutsController>(ClassroomLayoutsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
