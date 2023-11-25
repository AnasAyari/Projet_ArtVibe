import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, IsActiveMatchOptions, Router } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent implements OnInit{
  requestForm!: FormGroup;
  showForm: boolean=false
  userID!:any;
  activityID!:any;
  activity!:Activity;
  constructor(private fb:FormBuilder,private router:Router,private requestService:RequestService,private activatedRoute:ActivatedRoute,private activityService:ActivityService){}
  ngOnInit(): void {
    this.userID=this.activatedRoute.snapshot.paramMap.get('userID');
    this.activityID=this.activatedRoute.snapshot.paramMap.get('activityID');
    this.activityService.getActivityById(this.activityID).subscribe(data => {
      this.activity = data;
    })
    this.requestForm=this.fb.group({
      description: ['test description', Validators.required],
    })
  }
  toggleForm() {
    this.showForm = !this.showForm;
  }
  request:any = {}
  savedRequest:any;
  sendParticipationRequest(){
    this.request.requestUserID = this.userID;
    this.request.requestActivityID = this.activityID;
    this.request.description = this.requestForm.value.description;
    console.log(this.activity);
    console.log(this.request);
    
    this.requestService.saveRequest(this.request).subscribe(data => {
      this.savedRequest = data;
      console.log(this.savedRequest);
      this.activityService.getActivityById(this.activityID).subscribe(data => {
        data.requests.push(this.savedRequest); 
        this.activityService.updateActivity(this.activityID,data).subscribe();   
      });
    });
    
  }
}
