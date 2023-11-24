import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-saved-posts-list',
  templateUrl: './saved-posts-list.component.html',
  styleUrls: ['./saved-posts-list.component.css']
})
export class SavedPostsListComponent implements OnInit{
  id:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    
  }
}
