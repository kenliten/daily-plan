import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPlanFormComponent } from './lesson-plan-form.component';

describe('LessonPlanFormComponent', () => {
  let component: LessonPlanFormComponent;
  let fixture: ComponentFixture<LessonPlanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonPlanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
