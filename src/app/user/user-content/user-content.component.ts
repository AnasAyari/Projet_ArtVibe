import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { User } from 'src/app/models/user';
import { ActivityService } from 'src/app/services/activity.service';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent implements OnInit{

  @Input() activity!:Activity;
  id:any;
  usersTable:any[] =[]
  activitiesTable!:any[]
  constructor(private router:Router,private userService:UserService,private activityService:ActivityService,private commentService:CommentService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    this.getUsersList();
    this.getActivityList();
  }
  getActivityList(){
    this.activityService.getActivities().subscribe(data => {
      this.activitiesTable = data;
    })
  }
  getActivityById(activityID:number){
    this.activityService.getActivityById(activityID).subscribe();
  }
  getUsersList(){
    this.userService.getUsersList().subscribe(data => {
      this.usersTable = data;
    })
  }
  getUserById(userID:number){
    for(let i=0;i<this.usersTable.length;i++){
      if(this.usersTable[i].id == userID){
        return this.usersTable[i];
      }
    }
  }
  comment:any = {};
  savedComment:any;
  Comment(activityID:number,message:string){
    this.comment.activityID = activityID;
    this.comment.userID = 1;
    this.comment.message = message;
    if(this.comment.message!=""){
      this.commentService.saveComment(this.comment).subscribe(data => {
        console.log(data);
        this.savedComment = data;
        console.log(this.savedComment);
        this.activity.comments.push(this.savedComment);
        this.activityService.updateActivity(activityID,this.activity).subscribe()
      })
    }
  }
  Like(activityID:number){
    let i:number = 0;
    while(i < this.activity.likeusers.length && this.activity.likeusers[i].id!=this.id){
      i++;
    }
    if(i==this.activity.likeusers.length){
      this.activity.likeusers.push(this.getUserById(this.id));
      this.activityService.updateActivity(activityID,this.activity).subscribe()
      console.log(this.activity);
      console.log("Liking a post");
    }else{
      console.log("removing a like");
      
    }
    
  }
  request:any = {}
  sendRequest(activityID:number){
    this.request.requestUserID = this.id;
    this.request.requestActivityID = activityID;
    this.activity.requests.push()
  }
  onClick(){
    this.router.navigate(['/contentDetails']);
  }
}
