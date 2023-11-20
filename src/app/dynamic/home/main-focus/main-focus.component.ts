import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-focus',
  templateUrl: './main-focus.component.html',
  styleUrls: ['./main-focus.component.css']
})
export class MainFocusComponent {
  constructor(private router:Router){}
  onClick(){
    this.router.navigate(['/form/login']);
  }
}
