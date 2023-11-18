import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { AddActivityComponent } from '../popupforms/add-activity/add-activity.component';


@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit{

  activitiesTable!:Activity[];

  constructor(private activityService:ActivityService,public dialog: MatDialog){}

  ngOnInit(): void {
    this.getAllActivities();
  }


  getAllActivities(){
    this.activityService.getActivities().subscribe(data =>{
      this.activitiesTable = data;
      console.log(data);
    })
  }
  animal!: string;
  name!: string;
  openAddActivity() {
    const dialogRef = this.dialog.open(AddActivityComponent, {
      data: { name: this.name, animal: this.animal }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log(this.animal);
    });
  }
}

