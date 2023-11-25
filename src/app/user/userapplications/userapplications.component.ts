import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-userapplications',
  templateUrl: './userapplications.component.html',
  styleUrls: ['./userapplications.component.css']
})
export class UserapplicationsComponent implements OnInit{
  id:any;
  activitiesTable!:any[]
  userActivities!:Activity[] 
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private activityService:ActivityService){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.activityService.getActivities().subscribe(data => {
      this.activitiesTable = data;
      console.log(this.activitiesTable);
    })
  }
  checkValidation(participants:any[]){
    let i:number=0;
    while(i<participants.length && participants[i].id!=this.id){
      i++;
    }
    if(participants[i]?.id==this.id){
      return true;
    }
    else if(i==participants.length){
      return false;
    }
    return false;
  }
}
