import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email:new FormControl,
    username:new FormControl(),
    password:new FormControl(),
    role:new FormControl()
  })

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    //console.log(this.loginForm.value)
    // this.service.loginFromRemote(this.loginForm).subscribe((data)=>{
    //   console.log("logged in successfully")
    // },(err)=>{
    //   console.log("error occurs")
    // })
    if(this.loginForm.valid)
    {
      console.log("we have to submit this form to the server")
      this.service.generate(this.loginForm.value).subscribe((res)=>{
        this.service.loginUser(res);
        this.service.getCurrentUser().subscribe((user)=>{
          console.log("successful");
          this.service.setCurrentUser(user);
          console.log(user)
          console.log(this.service.getRole());

          if(this.service.getRole()=='ADMIN')
          {
            //redirect .. ADMIN-adm dashboard
            //this.router.navigate(['admin']);
            window.location.href='/admin';
          }
          else if(this.service.getRole()=='USER')
          {
            //redirect ...Student - stu dashboard
            this.router.navigate(['student'])
          }
          else{
            this.service.loggedOut();
          }
          
        })
        })
      }
  }

}

