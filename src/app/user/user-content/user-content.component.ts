import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent {
  constructor(private router:Router){}
  
  onClick(){
    this.router.navigate(['/contentDetails']);
  }
}
