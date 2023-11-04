import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersURL = "http://localhost:8088/api/v1/users"

  constructor(private httpClient:HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.usersURL}`)
  }
  saveUser(user:User){
    return this.httpClient.post(`${this.usersURL}`,user);
  }
}
