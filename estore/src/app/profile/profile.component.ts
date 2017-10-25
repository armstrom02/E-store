import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {DbconnectService} from '../dbconnect.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public name;

  constructor(private getuser: AppService,private auth :DbconnectService) { }

  ngOnInit() {


    this.name=this.getuser.checkuser();

  }
    
  

     
   
}
