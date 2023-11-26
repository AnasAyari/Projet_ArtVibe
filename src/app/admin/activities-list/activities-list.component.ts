import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { AddActivityComponent } from '../popupforms/add-activity/add-activity.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categories } from 'src/app/categories';


@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit{

  acitivityForm!: FormGroup;
  acitivityModifyForm!: FormGroup;
  filteredActivities: Activity[] = [];
  activitiesTable!:Activity[];
  showAddForm: boolean=false
  showModifyForm: boolean=false
  activityID!:any
  allCategories = Object.values(Categories)
  constructor(private activityService:ActivityService,public dialog: MatDialog, private fb:FormBuilder){}
  
  ngOnInit(): void {
    

    this.getAllActivities();
    this.filteredActivities = this.activitiesTable;
    this.acitivityForm=this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      category: [this.allCategories[1], Validators.required],
      participantNB: [0,],
      likeNumber: [0,],
      photo: [''],
      likeusers:this.fb.array([]),
      comments: this.fb.array([]),
      requests: this.fb.array([]),
      participant: this.fb.array([]),
    })
    this.acitivityModifyForm=this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      category: [this.allCategories[1], Validators.required],
      participantNB: [0,],
      likeNumber: [0,],
      photo: [''],
      likeusers:this.fb.array([]),
      comments: this.fb.array([]),
      requests: this.fb.array([]),
      participant: this.fb.array([]),
    })

  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }
  modifyForm(activityID:number){
    console.log(activityID);
    this.activityID = activityID
    this.activityService.getActivityById(activityID).subscribe(data => {
      console.log(data);
      this.acitivityModifyForm=this.fb.group({
        title: [data.title, Validators.required],
        date: [data.date, Validators.required],
        description: [data.description, Validators.required],
        category: [data.category, Validators.required],
        participantNB: [data.participantNB,],
        likeNumber: [data.likeusers.length,],
        photo: [data.photo],
        likeusers:[data.likeusers],
        comments: [data.comments],
        requests: [data.requests],
        participant:[data.participant],
      })
    })
    
  }
  toggleModifyForm() {
    
    this.showModifyForm = !this.showModifyForm;
    
  }


  getAllActivities(){
    this.activityService.getActivities().subscribe(data =>{
      this.activitiesTable = data;
      this.filteredActivities = [...this.activitiesTable];
      console.log(data);
    })
  }
  
  act = new Activity();
  
  openAddActivity() {
    const dialogRef = this.dialog.open(AddActivityComponent, {
      data: {title:this.act?.title,category:this.act?.category}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.act = result;
      /*console.log(result);*/
      
      console.log(this.act);
      this.addActivity(this.act);
    });
  }
  addActivity(activity:Activity){
    this.activityService.saveActivity(activity).subscribe(data => {
      console.log(data);
    });
  }

  deleteActivityById(activityID:number){
    this.activityService.deleteActivity(activityID).subscribe( () => {
      this.activitiesTable = this.activitiesTable.filter((act) => act.id !== activityID);
    })
  }

  sortActivitiesAZ() {
    this.filteredActivities.sort((a, b) => a.title.localeCompare(b.title));
    this.activitiesTable = this.filteredActivities;
  }

  addAct(){
    this.activityService.saveActivity(this.acitivityForm.value).subscribe(data=>{
      console.log(data);
      this.activityService.getActivities().subscribe(data => {
        this.activitiesTable = data;
      })
    })
    
  }
  modifyAct(){
    this.activityService.updateActivity(this.activityID,this.acitivityModifyForm.value).subscribe(data => {
      console.log(data);
      this.activityService.getActivities().subscribe(data => {
        this.activitiesTable = data;
      })
    })
  }
  searchTerm!:string
  searchActivities() {
    if (!this.searchTerm) {
      this.filteredActivities = this.activitiesTable;
    } else {
      this.filteredActivities = this.activitiesTable.filter(
        act => act.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    return this.filteredActivities;
  }
}