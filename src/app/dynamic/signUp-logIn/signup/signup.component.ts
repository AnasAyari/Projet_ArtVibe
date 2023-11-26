import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  users!: User[];
  newUser:User = new User;

  constructor(private userservice:UserService,private router:Router){}
  Register(){
    this.userservice.getUsersList().subscribe( data =>{
      this.users = data;
      let i:number=0;
      while(i<this.users.length && this.users[i].email!=this.newUser.email){
        i++;
      }
      if(i==this.users.length){
        this.userservice.saveUser(this.newUser).subscribe(data =>{
          console.log(data);
        })
        console.log("email doesnt exists");
        console.log("REGISTRED!!!");
        this.router.navigate(['form/login']);
      }else{
        console.log("email adress already exists please use another one");
      }
    })
  }
  onSubmit(){
    console.log(this.newUser);
    this.Register();
  }
}
