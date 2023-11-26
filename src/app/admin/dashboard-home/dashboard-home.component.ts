import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity';
import { User } from 'src/app/models/user';
import { ActivityService } from 'src/app/services/activity.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit{


  activitiesTable!:any[]
  mostParticipatedInActivities:any[] = []
  upComingActivity!:any
  lastActivity!:any
  mostLikedActivity!:any
  activeActivity!:any
  currentDate:Date = new Date();
  date:string = "2023-11-24";
constructor(private userervice:UserService,private activityService:ActivityService){}

  ngOnInit(): void {
    console.log(this.currentDate);
    console.log(new Date(this.date));
    console.log(this.currentDate < new Date(this.date));
    
    this.activityService.getActivities().subscribe(data => {
      this.activitiesTable = data.sort((a,b) => a.participantNB - b.participantNB);
      for(let i = this.activitiesTable.length-1;i >= this.activitiesTable.length-3;i--){
        this.mostParticipatedInActivities.push(this.activitiesTable[i]);
      }
      console.log(this.mostParticipatedInActivities);

      this.activitiesTable = this.activitiesTable.sort((a,b) => Number(new Date(a.date))- Number(new Date(b.date)));
      for(let i = 0;i < this.activitiesTable.length;i++){
        if(new Date(this.activitiesTable[i].date) > this.currentDate){
          console.log(this.activitiesTable[i].date);
        this.upComingActivity = this.activitiesTable[i];
        console.log(this.upComingActivity);
        
        }
      }
      this.activitiesTable = this.activitiesTable.sort((a,b) => Number(new Date(a.date))- Number(new Date(b.date)));
      for(let i = this.activitiesTable.length-1;i > 0;i--){
        if(new Date(this.activitiesTable[i].date) < this.currentDate){
          console.log(this.activitiesTable[i].date);
          this.lastActivity = this.activitiesTable[i]
        }
      }
      this.activitiesTable = this.activitiesTable.sort((a,b) => a.likeusers.length - b.likeusers.length);
      this.mostLikedActivity = this.activitiesTable[this.activitiesTable.length-1];
      for(let i = 0;i < this.activitiesTable.length;i++){
        console.log(this.activitiesTable[i].date);
        console.log((this.currentDate).toISOString().split('T')[0]);
        if(this.activitiesTable[i].date === (this.currentDate).toISOString().split('T')[0]){
          console.log(this.activitiesTable[i].date);
          this.activeActivity = this.activitiesTable[i];
        }
      }
    })
  }
}