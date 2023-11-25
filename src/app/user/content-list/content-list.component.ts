import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit{
  id:any;
  activitiesTab!:any[]

  constructor(private activityService:ActivityService,private router:Router,private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.getAllActivities();
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
  }

  getAllActivities(){
    this.activityService.getActivities().subscribe(data => {
      this.activitiesTab = data;
      console.log(this.activitiesTab);
      
    })
  }


}
