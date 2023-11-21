import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { AddActivityComponent } from '../popupforms/add-activity/add-activity.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit{

  acitivityForm!: FormGroup;

  activitiesTable!:Activity[];
  showForm: boolean=false
  constructor(private activityService:ActivityService,public dialog: MatDialog, private fb:FormBuilder){}

  ngOnInit(): void {
    this.getAllActivities();
    this.acitivityForm=this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      photo: ['']
    })
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }


  getAllActivities(){
    this.activityService.getActivities().subscribe(data =>{
      this.activitiesTable = data;
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
      this.activitiesTable = this.activitiesTable.filter((act) => act.activityID !== activityID);
    })
  }
}



