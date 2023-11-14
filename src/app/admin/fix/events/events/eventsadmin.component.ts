import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddPopupComponent } from '../../shared_components/shared_popups/add-popup/add-popup.component';
import { PasswordPopupComponent } from '../../../main_dashboard_components/password-popup/password-popup.component';
import { ScorecardPopupComponent } from '../../../main_dashboard_components/pop_ups/scorecard-popup/scorecard-popup.component';
import { SignoutPopupComponent } from '../../../main_dashboard_components/pop_ups/signout-popup/signout-popup.component';

@Component({
  selector: 'app-eventsadmin',
  templateUrl: './eventsadmin.component.html',
  styleUrls: ['./eventsadmin.component.css']
})
export class EventsadminComponent {
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
  openAddPopup(){
    this.dialogRef.open(AddPopupComponent);
  }
}
