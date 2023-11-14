import { Component } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { AddMemberPopupComponent } from './members/add-member-popup/add-member-popup.component';
import { PasswordPopupComponent } from '../../main_dashboard_components/password-popup/password-popup.component';
import { ScorecardPopupComponent } from '../../main_dashboard_components/pop_ups/scorecard-popup/scorecard-popup.component';
import { SignoutPopupComponent } from '../../main_dashboard_components/pop_ups/signout-popup/signout-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private dialogRef: MatDialog){

  }
  openPasswordPopup(){
    this.dialogRef.open(PasswordPopupComponent);
  }
  openScorecardPopup(){
    this.dialogRef.open(ScorecardPopupComponent);
  }
  openSignoutPopup(){
    this.dialogRef.open(SignoutPopupComponent);
  }
  openAddMemberPopup(){
    this.dialogRef.open(AddMemberPopupComponent);
  }
}
