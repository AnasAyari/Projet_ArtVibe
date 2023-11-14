import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from '../shared_popups/delete-popup/delete-popup.component';
import { ModifyPopupComponent } from '../shared_popups/modify-popup/modify-popup.component';
import { DetailsPopupComponent } from '../shared_popups/details-popup/details-popup.component';

@Component({
  selector: 'app-shared-component',
  templateUrl: './shared-component.component.html',
  styleUrls: ['./shared-component.component.css']
})
export class SharedComponentComponent {
  constructor(private dialogRef: MatDialog){

  }
  openDeletePopup(){
    this.dialogRef.open(DeletePopupComponent);
  }
  openModifyPopup(){
    this.dialogRef.open(ModifyPopupComponent);
  }
  openDetailsPopup(){
    this.dialogRef.open(DetailsPopupComponent);
  }
}
