import { Component, OnInit } from '@angular/core';
import {DbconnectService} from '../dbconnect.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor (private createusr : DbconnectService ) { }

  ngOnInit() {
  }
  send(){  
    var userName= (<HTMLInputElement>document.getElementById("name")).value;
    var Email= (<HTMLInputElement>document.getElementById("email")).value; 
    var Password= (<HTMLInputElement>document.getElementById("password")).value; 
    var Dob= (<HTMLInputElement>document.getElementById("dob")).value;
    var phone= (<HTMLInputElement>document.getElementById("phone")).value;
    if(userName.length!=0 && Email.length!=0 && Password.length!=0 ){
    var obj={name:userName, email: Email, mobile: phone, dob: Dob, password: Password };
      this.createusr.create_user(obj);
      alert("Signup Succesfull") ;
    }
    else alert ("field in empty")
  }
}
