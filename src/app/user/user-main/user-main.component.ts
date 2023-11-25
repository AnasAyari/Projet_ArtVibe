import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit{
  id!:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private authService:AuthService){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    
    console.log(this.id);
    
    
  }
}
