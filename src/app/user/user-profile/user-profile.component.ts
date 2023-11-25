import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  id:any;
  username:any
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private userService:UserService){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    this.userService.getUsersById(this.id).subscribe(data=>{
      this.username=data.username
    })
  }

  onClick(path:string){
    this.router.navigate([path]);
  }
}
