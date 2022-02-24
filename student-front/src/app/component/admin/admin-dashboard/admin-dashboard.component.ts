import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
  }

  addStudent()
  {
      console.log("add")
  }
  allStudent()
  {
    this.router.navigate(['all'])
  }
  update(){
    console.log("up")
  }

  logout()
  {
    this.service.loggedOut();
    // localStorage.removeItem("user"),
    // localStorage.removeItem("token");
    this.router.navigate(['login'])
  }

}
