import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userapplications',
  templateUrl: './userapplications.component.html',
  styleUrls: ['./userapplications.component.css']
})
export class UserapplicationsComponent implements OnInit{
  id:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    
  }
}
