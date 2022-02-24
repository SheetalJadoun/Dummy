import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStuComponent } from './all-stu.component';

describe('AllStuComponent', () => {
  let component: AllStuComponent;
  let fixture: ComponentFixture<AllStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
