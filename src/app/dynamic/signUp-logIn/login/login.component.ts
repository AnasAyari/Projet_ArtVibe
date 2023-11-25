import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authservice:AuthService,private router:Router){}
  ngOnInit(): void {
    this.authservice.ngOnInit();
  }
  login(email:string,password:string){
    this.authservice.checkLogin(email,password);
    if (this.authservice.isAdmin){
      this.router.navigate(['admin/home']);
    }else{
      this.router.navigate(['user/userProfile']);
    }
  }



}

