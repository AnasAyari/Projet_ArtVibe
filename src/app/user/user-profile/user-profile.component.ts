import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hobby } from 'src/app/models/hobby';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  id:any;
  user:any = {}
  ApiService: any;
  hobbies: any = {}
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private userService:UserService,private apiService:ApiService){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    this.userService.getUsersById(this.id).subscribe(data=>{
      this.user=data
    });
    this.apiService.getHobbies().subscribe(data => {
      this.hobbies = data
      console.log(this.hobbies);
    });

  }



  navigateToChangePassword(path:string){
    this.router.navigate([path]);
  }
}
