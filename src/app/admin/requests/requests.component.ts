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
      
    })
  }
  getAllUsers(){
    this.userService.getUsersList().subscribe(data => {
      this.usersTable = data;
    })
  }
  //GET ALL ACTIVITIES
  getAllActivities(){
    this.activityService.getActivities().subscribe( data => {
      this.activitiesTable = data;
      
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
      console.log("request deleted!!!");
    });
  }
  //ACCEPT A PARTICIPATION REQUEST AND ADD A USER TO AN ACTIVITIES PARTICIPANTS LIST
  acceptRequest(userID:number,activityID:number,requestID:number){
    this.getRequestActivity(activityID).participantNB += 1;
    this.getRequestActivity(activityID).participant.push(this.getRequestUser(userID));
    console.log(this.getRequestActivity(activityID));
    
    this.requestService.addParticipant(activityID,this.getRequestActivity(activityID)).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  onAccept(userID:number,activityID:number,requestID:number){
    this.acceptRequest(userID,activityID,requestID);
    this.deleteRequest(requestID);
  }
}
