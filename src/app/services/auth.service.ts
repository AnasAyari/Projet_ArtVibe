import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  constructor(private userservice:UserService,){}
  users: User[] = [];

  ngOnInit(): void {
      this.userservice.getUsersList().subscribe(data => {
        this.users=data}
        );

      }
  
      userID!:number

  private authenticated = false;
  public login() {
    console.log(this.users);

  }
  public logout() {
    this.authenticated = false;
  }
  public isAuthenticated() {
    return this.authenticated;
  }

  isAdmin=false

  checkLogin(email:string,pwd:string){
    let i:number=0;

      while(i<this.users.length && this.users[i].email != email){
        i++;
      }
      if(i==this.users.length){
        console.log("user doesnt exist");
        this.authenticated=false
        return this.authenticated;
      }
      else if(this.users[i].email == email && this.users[i].pwd == pwd){
        this.userID=this.users[i].id;
        if (this.users[i].admin){
          this.isAdmin=true
        }
        this.authenticated=true
        return this.authenticated;
      }else{
        return this.authenticated;
      }
      }
  }
