import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  login(username : string, password: string): Observable<any>{
    return this.http.post<any>(this.baseURL+'/login',{params:{username:username, password: password}});
  }
}
