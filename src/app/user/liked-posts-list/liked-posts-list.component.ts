import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-liked-posts-list',
  templateUrl: './liked-posts-list.component.html',
  styleUrls: ['./liked-posts-list.component.css']
})
export class LikedPostsListComponent implements OnInit{
  id:any;
  activitiesTable!:any[]
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private activityService:ActivityService){}
  ngOnInit(): void {
    this.getAllActivities();
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
  }
  getAllActivities(){
    this.activityService.getActivities().subscribe(data => {
      this.activitiesTable = data;
      console.log(this.activitiesTable);
    })
  }
  checkValidation(likeusers:any[]){
    let i:number=0;
    while(i<likeusers.length && likeusers[i].id!=this.id){
      i++;
    }
    if(likeusers[i]?.id==this.id){
      return true;
    }
    else if(i==likeusers.length){
      return false;
    }
    return false;
  }
}
