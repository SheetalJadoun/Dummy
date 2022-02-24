import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private service:ServiceService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    |Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      if(this.service.isLoggedIn() && this.service.getRole()=='ADMIN')
      {
        console.log("yha aaya h guard m")
        return true;
      }
      console.log(this.service.getRole());
      this.router.navigate(["login"])

      return false;
  }
  
}
