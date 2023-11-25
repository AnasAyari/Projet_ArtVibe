import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit{
  id:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    
  }
}
