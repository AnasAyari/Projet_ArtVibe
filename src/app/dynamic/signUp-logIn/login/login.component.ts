import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users!: User[];
  constructor(private userservice:UserService,private router:Router){}
  ngOnInit(): void {
    
  }
  logData(){
    this.userservice.getUsersList().subscribe(data => {
      console.log(data);
    })
  }
  checkLogin(email:string,pwd:string){
    let i:number=0;
    this.userservice.getUsersList().subscribe(data => {
      this.users = data;
      while(i<this.users.length && this.users[i].email != email){
        i++;
      }
      if(i==this.users.length){
        console.log("user doesnt exist");
      }
      else if(this.users[i].email == email && this.users[i].pwd == pwd){
        if(this.users[i].admin){
          this.router.navigate(["/admin/",this.users[i].userID]);
          console.log
        }else{
          this.router.navigate(["/userProfile/",this.users[i].userID]);
        }
        
      }
      else{
        console.log("WRONG PASSWORD!!!");
      }
    })
  }
}
