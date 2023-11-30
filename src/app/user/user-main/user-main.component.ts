import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit{
  id!:any;
  isAdmin:boolean = false;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private authService:AuthService,private userService:UserService){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.id);
    this.userService.getUsersById(this.id).subscribe(data => {
      this.isAdmin = data.admin;
    })
  }
}
