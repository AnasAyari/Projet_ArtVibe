import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersURL = "http://localhost:3000/Users"

  constructor(private httpClient:HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.usersURL}`);
  }

  getUsersById(id:number): Observable<User>{
    return this.httpClient.get<User>(`${this.usersURL}/${id}`);
  }
  
  saveUser(user:User){
    return this.httpClient.post(`${this.usersURL}`,user);
  }

  deleteUserById(userID:number){
    return this.httpClient.delete(`${this.usersURL}/${userID}`);
  }
}
