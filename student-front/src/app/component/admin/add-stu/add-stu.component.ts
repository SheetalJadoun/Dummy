import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-stu',
  templateUrl: './add-stu.component.html',
  styleUrls: ['./add-stu.component.css']
})
export class AddStuComponent implements OnInit {


  student=new FormGroup({
    email:new FormControl(),
    username:new FormControl(),
    password:new FormControl(),
    branch:new FormControl(),
    course:new FormControl()
  })
  constructor(private service:RoleService,private router:Router,private logservice:ServiceService) { }

  ngOnInit(): void {
  }


  onSubmit()
  {
      this.service.addStudentFromRemote(this.student.value).subscribe((data)=>{
        console.log("user added successfullt")
        this.router.navigate(['/all'])
      },
      (err)=>{
        console.log("error occurss");
      })
  }

  logout()
  {
    this.logservice.loggedOut();
    this.router.navigate(['login'])
  }
}
