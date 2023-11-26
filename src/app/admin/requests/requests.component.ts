import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models/activity';
import { User } from 'src/app/models/user';
import { ActivityService } from 'src/app/services/activity.service';
import { RequestService } from 'src/app/services/request.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit{
  id:any;
  requestsTable!:any[];
  usersTable:User[] = [];
  activitiesTable:Activity[] = [];
  constructor(private activatedRoute:ActivatedRoute,private requestService:RequestService,private userService:UserService,private activityService:ActivityService){}

  ngOnInit(): void {
    this.getAllRequests();
    this.getAllUsers();
    this.getAllActivities();
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
  }

  getAllRequests(){
    this.requestService.getRequests().subscribe(data => {
      this.requestsTable = data;
      console.log(this.requestsTable);
      
    })
  }
  getAllUsers(){
    this.userService.getUsersList().subscribe(data => {
      this.usersTable = data;
      console.log(this.usersTable);
      
    })
  }
  //GET ALL ACTIVITIES
  getAllActivities(){
    this.activityService.getActivities().subscribe( data => {
      this.activitiesTable = data;
      
    })
  }
  //GET A USER BY ID
  getRequestUser(id:number):any{
    for (let i = 0; i < this.usersTable.length; i++) {
      if (this.usersTable[i].id == id) {
          return this.usersTable[i];
      }
    }
    return null;
  }
  //GET A USER BY ID
  getRequestActivity(activityID:number):any{
    for (let i = 0; i < this.activitiesTable.length; i++) {
      if (this.activitiesTable[i].id == activityID) {
          return this.activitiesTable[i];
      }
    }
    return null;
  }
  //DELETE A REQUEST AND UPDATE WITHOUT REFRESH
  deleteRequest(requestID:number,activityID:number){
    this.requestService.deleteRequest(requestID).subscribe( () => {
      this.requestsTable = this.requestsTable.filter((req) => req.id!== requestID);
      
      console.log("request deleted!!! from dashboard");
    });
    this.activityService.getActivityById(activityID).subscribe(data => {
      data.requests = data.requests.filter((req) => req.id!== requestID);
      this.activityService.updateActivity(activityID,data).subscribe( data => {
        console.log(data);
      });
      console.log("request deleted!!! from activity");
      
      
    })
    
  }
  //ACCEPT A PARTICIPATION REQUEST AND ADD A USER TO AN ACTIVITIES PARTICIPANTS LIST
  acceptRequest(userID:number,activityID:number,requestID:number){
    this.activityService.getActivityById(activityID).subscribe(data => {
      
      data.participant.push(this.getRequestUser(userID));
      data.participantNB += 1;
      data.requests = data.requests.filter((req) => req.id!== requestID);
      this.activityService.updateActivity(activityID,data).subscribe(data =>{
        console.log(data);
        
      })
    });
    
    this.requestService.deleteRequest(requestID).subscribe(() => {
      this.requestsTable = this.requestsTable.filter((req) => req.id!== requestID);
    })
  }

  
}
