import { Component, OnInit } from '@angular/core';
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

  requestsTable!:any[];
  usersTable:User[] = [];
  activitiesTable:Activity[] = [];
  constructor(private requestService:RequestService,private userService:UserService,private activityService:ActivityService){}

  ngOnInit(): void {
    this.getAllRequests();
    this.getAllUsers();
    this.getAllActivities();
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
      console.log(this.activitiesTable);
    })
  }
  //GET A USER BY ID
  getRequestUser(userID:number):any{
    for (let i = 0; i < this.usersTable.length; i++) {
      if (this.usersTable[i].userID == userID) {
          return this.usersTable[i];
      }
    }
    return null;
  }
  //GET A USER BY ID
  getRequestActivity(activityID:number):any{
    for (let i = 0; i < this.activitiesTable.length; i++) {
      if (this.activitiesTable[i].activityID == activityID) {
          return this.activitiesTable[i];
      }
    }
    return null;
  }
  //DELETE A REQUEST AND UPDATE WITHOUT REFRESH
  deleteRequest(requestID:number){
    this.requestService.deleteRequest(requestID).subscribe( () => {
      this.requestsTable = this.requestsTable.filter((req) => req.requestID !== requestID);
    });
  }
  //ACCEPT A PARTICIPATION REQUEST AND ADD A USER TO AN ACTIVITIES PARTICIPANTS LIST
  acceptRequest(userID:number,activityID:number,requestID:number){
    this.getRequestActivity(activityID).participant.push(this.getRequestUser(userID));
    console.log(this.getRequestActivity(activityID));
    this.getRequestActivity(activityID).participantNB++;
    this.requestService.addParticipant(activityID,this.getRequestActivity(activityID)).subscribe(data =>{
      console.log(data);
      });
      this.deleteRequest(requestID);
  }
}
