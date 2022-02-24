import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  url='http://localhost:8181';
  constructor(private http:HttpClient) { }

  getAll():Observable<any>
  {
    return this.http.get(`${this.url}/get`);
  }

  delete(id:any)
  {
    return this.http.delete(`${this.url}`+'/delete?id=' +id)
  }

  addStudentFromRemote(user:any)
  {
    return this.http.post(`${this.url}/add`,user);
  }

  getStudentById(id:any)
  {
    return this.http.get(`${this.url}`+'/getStudent?id='+id)
  }
}


