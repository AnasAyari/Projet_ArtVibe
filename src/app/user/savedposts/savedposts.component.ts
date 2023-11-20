import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-savedposts',
  templateUrl: './savedposts.component.html',
  styleUrls: ['./savedposts.component.css']
})
export class SavedpostsComponent {
  constructor(private router:Router){}
  
  onClick(){
    this.router.navigate(['/contentDetails']);
  }
}
