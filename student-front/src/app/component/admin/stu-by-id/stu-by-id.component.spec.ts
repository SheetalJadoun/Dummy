import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuByIdComponent } from './stu-by-id.component';

describe('StuByIdComponent', () => {
  let component: StuByIdComponent;
  let fixture: ComponentFixture<StuByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
