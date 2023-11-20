import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-likeposts',
  templateUrl: './likeposts.component.html',
  styleUrls: ['./likeposts.component.css']
})
export class LikepostsComponent {

  constructor(private router:Router){}
  
  onClick(){
    this.router.navigate(['/contentDetails']);
  }
}
