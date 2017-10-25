import { Component, OnInit } from '@angular/core';
import{User} from '../user';
import{users} from '../users';
import { Router } from '@angular/router';
import {AppService} from'../app.service';
import {DbconnectService} from '../dbconnect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

users: User[];
userdata: any[];

constructor(private router: Router, private service: AppService, private auth :DbconnectService) { }

  ngOnInit() {
    this.users=users;
    this.auth.get_all();
  }

  loginfun(){
  

    var usr : string =(<HTMLInputElement> document.getElementById("Username")).value; 
    var pas : string =(<HTMLInputElement> document.getElementById("password")).value; 

    this.userdata = this.auth.usersdata;
    console.log(this.userdata);
    
if(usr.length!=0&&pas.length!=0){
  for (var i = 0; i < this.userdata.length; i++)
  {
    if (this.userdata[i].name==usr)
    {
      if(this.userdata[i].password==pas)
      {
      alert("Login Succesfull");
      this.router.navigate(['/productlist',usr]);
      this.service.role=false;
      this.service.user=usr;

      break;
      }
      else alert("Password Incorrect");
      break;
    }
    else{
        if (i==this.userdata.length-1){
        alert("Username Doesn't exist");
        }

    }

   } 
   
  }
  else alert("field id empty");
  }


  }





