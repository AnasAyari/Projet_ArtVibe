import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liked-posts-list',
  templateUrl: './liked-posts-list.component.html',
  styleUrls: ['./liked-posts-list.component.css']
})
export class LikedPostsListComponent implements OnInit{
  id:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    
  }
}
