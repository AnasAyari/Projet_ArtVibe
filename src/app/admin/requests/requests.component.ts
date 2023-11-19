import { Component, OnInit } from '@angular/core';
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

  requestsTable:any[] = [];
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
  getAllActivities(){
    this.activityService.getActivities().subscribe( data => {
      this.activitiesTable = data;
      console.log(this.activitiesTable);
    })
  }
  getRequestUser(userID:number){
    for (let i = 0; i < this.usersTable.length; i++) {
      if (this.usersTable[i].userID == userID) {
          return this.usersTable[i];
      }
    }
    return null;
  }

  getRequestActivity(activityID:number){
    for (let i = 0; i < this.activitiesTable.length; i++) {
      if (this.activitiesTable[i].activityID == activityID) {
          return this.activitiesTable[i];
      }
    }
    return null;
  }
  
}
