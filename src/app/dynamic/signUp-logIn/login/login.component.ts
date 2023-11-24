import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private authservice:AuthService,private router:Router){}
  ngOnInit(): void { 
  }
  
  login(email:string,password:string){
    if (this.authservice.checkLogin(email,password) && this.authservice.isAdmin){
      console.log("success")
    }

  }
  test(){
    this.authservice.login();
  }
}
