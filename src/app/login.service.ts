import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logout() {
    throw new Error('Method not implemented.');
  }
  isUserLoggedIn(): boolean {
    throw new Error('Method not implemented.');
  }


private baseURL="http://localhost:8080/welcome";
USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  constructor(private httpClient:HttpClient) { }
  
  auth(login:Login):Observable<any>{
    return this.httpClient.post(`${this.baseURL}`,login);
  }
}

