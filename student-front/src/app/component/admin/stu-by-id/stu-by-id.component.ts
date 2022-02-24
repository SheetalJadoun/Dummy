import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { User } from 'src/app/models/User';

import { RoleService } from 'src/app/services/role.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-stu-by-id',
  templateUrl: './stu-by-id.component.html',
  styleUrls: ['./stu-by-id.component.css']
})
export class StuByIdComponent implements OnInit {

  student=new Student();
  constructor(private route:ActivatedRoute,private service:RoleService,private router:Router,private logservice:ServiceService) { }
  temp:any;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getStudentById(id).subscribe((data)=>{
      console.log("data recived successfully");
      this.temp=data;
      this.student=this.temp;
      console.log(this.temp);
    })
  }

  logout()
  {
    this.logservice.loggedOut();
    
    this.router.navigate(['login'])
  }
}
