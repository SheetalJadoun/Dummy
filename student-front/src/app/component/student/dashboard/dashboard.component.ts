import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';

import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
User=null;
  user={
    username:'',
    password:'',
    role:''
  }
  student=new Student();
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    let u=JSON.parse(localStorage.getItem('user') || '{}')
    this.user.username=u.username;
    this.user.password=u.password;
    this.user.role=u.authorities[0].authority;
    console.log(this.user)
    this.service.loggedInUser(this.user).subscribe((data)=>{
      console.log(data);
      this.temp=data;
      this.student=this.temp;
      console.log(this.student);
    })
  }

  temp:any;

  getCurrentUser(user:any)
  {
      this.service.loggedInUser(user).subscribe((data)=>{
        console.log(data);
        this.temp=data;
        this.student=this.temp;
        console.log(this.student);
      })
  }
}
