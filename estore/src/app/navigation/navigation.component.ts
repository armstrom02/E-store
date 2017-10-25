import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  
})
export class NavigationComponent implements OnInit {
 
  constructor( private logout: AppService ) {}


  ngOnInit() {
   
  }
  doThis(){
    this.logout.role =true;
  }

  
}
