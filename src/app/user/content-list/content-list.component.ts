import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit{

  activitiesTab!:Activity[]

  constructor(private activityService:ActivityService){}
  
  ngOnInit(): void {
    this.getAllActivities();
  }

  getAllActivities(){
    this.activityService.getActivities().subscribe(data => {
      this.activitiesTab = data;
      console.log(this.activitiesTab);
      
    })
  }


}
