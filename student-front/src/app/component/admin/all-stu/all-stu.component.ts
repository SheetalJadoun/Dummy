import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { RoleService } from 'src/app/services/role.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-all-stu',
  templateUrl: './all-stu.component.html',
  styleUrls: ['./all-stu.component.css']
})
export class AllStuComponent implements OnInit {

  dataArr:User[]=[];
  constructor(private service:RoleService,private router:Router,private logservice:ServiceService) { }

  ngOnInit(): void 
  {
      this.service.getAll().subscribe((data)=>{
        this.dataArr=data;
      },(err)=>{
        console.log("error ocurs")
      })
  }

  delete(email:any)
  {
    console.log("click")
    this.service.delete(email).subscribe((data)=>{
      console.log("deleted"+email);
    })
  }

  view(id:any)
  {
      console.log("click")
      this.router.navigate(['get/'+id]);
  }

  add()
  {
    this.router.navigate(['add'])
  }

  logout()
  {
    this.logservice.loggedOut();
    this.router.navigate(['login'])
  }
}
