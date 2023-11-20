import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent {

  constructor(public dialogRef:MatDialogRef<AddActivityComponent>,@Inject(MAT_DIALOG_DATA) public data:Activity){}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
