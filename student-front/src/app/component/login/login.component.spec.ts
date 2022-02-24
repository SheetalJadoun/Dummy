import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[FormsModule,ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test a form Group element count',()=>{
    const formEle=fixture.debugElement.nativeElement.querySelector('#loginForm');
    const inpEle=formEle.querySelectorAll('input');
    expect(inpEle.length).toEqual(3);
  })


  // it('update the value of input field',()=>{
  //   const input=fixture.nativeElement.querySelector('input')
  //   const event=createNewEvent('input')
  // });
});
