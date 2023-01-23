import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptCourseComponent } from './accept-course.component';

describe('AcceptCourseComponent', () => {
  let component: AcceptCourseComponent;
  let fixture: ComponentFixture<AcceptCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
