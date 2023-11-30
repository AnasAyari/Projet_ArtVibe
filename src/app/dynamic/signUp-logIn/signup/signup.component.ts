import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  users!: User[];
  newUser:User = new User;
  image!:any
  constructor(private userservice:UserService,private router:Router,private apiService:ApiService){}
  ngOnInit(): void {
    this.apiService.getImages().subscribe(data => {
      this.image = data
      console.log(this.image);
    });
  }
  Register(){
    this.userservice.getUsersList().subscribe( data =>{
      this.users = data;
      let i:number=0;
      while(i<this.users.length && this.users[i].email!=this.newUser.email){
        i++;
      }
      if(i==this.users.length){
        this.newUser.photo = this.image.images[0];
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
