import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomLayoutsService } from './classroom-layouts.service';

describe('ClassroomLayoutsService', () => {
  let service: ClassroomLayoutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassroomLayoutsService],
    }).compile();

    service = module.get<ClassroomLayoutsService>(ClassroomLayoutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
