import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url='http://localhost:8181';
  constructor(private http:HttpClient) { }

  // generate token
  generate(loginForm:any):Observable<any>
  {
    return this.http.post(`${this.url}/authenticate`,loginForm);
  }

  loginUser(token:any)
  {
    console.log(" y run hua h re")
    localStorage.setItem("token",token.jwt)
    return true;
  }

  // get token
  getToken()
  {
    return localStorage.getItem("token");
  }

  // logged in
  isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined|| token===''|| token==null)
    {
      return false;
    }
    else{
      return true;
    }
  }

  //logout
  loggedOut()
  {
    console.log("received")
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
  }

  //current user which is logged in
  public getCurrentUser()
  {
    //var user =JSON.parse(localStorage.getItem('user')||  '{}');
    return this.http.get(`${this.url}/current-stu`);
  }

  // set current user
  public setCurrentUser(user:any)
  {
    return localStorage.setItem("user",JSON.stringify(user));
  }

  public getRole()
  {
      return JSON.parse(localStorage.getItem("user")||'{}').authorities[0].authority;
  }


  public fetch():Observable<any>
  {
      return this.http.get("http://localhost:8181/get")
  }
  public loginFromRemote(loginForm:any): Observable<any> {
    console.log(loginForm);
    return this.http.post("http://localhost:8181/login",loginForm);
  }

  public loggedInUser(user:any)
  {
      return this.http.get(`${this.url}/loggedin`,user);
  }
}
