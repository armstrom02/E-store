import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppService } from './app.service';




@Injectable()
export class DbconnectService {

  public usersdata: any=[];
  public cartdata: any=[];
  public usr;
  

  constructor(private http : Http, private user: AppService) { }




create_user(user){
  
  let headers = new Headers({'Content-Type':'application/json'});
  let options = new RequestOptions({headers: headers});
  this.http.post('http://localhost:3200/user',user,options).subscribe();
}

get_user(user){
this.http.get('http://localhost:3200/user/:name',user).map((res:Response)=>res.json()).subscribe(data=>{this.user=data});
console.log(this.user);
 
}


get_all(){
this.http.get('http://localhost:3200/user').map((res:Response)=>res.json()).subscribe(data=>{this.usersdata=data});
console.log(this.usersdata);
}


addcartdb(order){
  let headers = new Headers({'Content-Type':'application/json'});
  let options = new RequestOptions({headers: headers});
  this.http.post('http://localhost:3200/cart',order,options).subscribe();
}

get_order(){
  var uname=this.user.checkuser();
 return  this.http.get('http://localhost:3200/carts/'+uname).map((res:Response)=>res.json());
  
  }

delete_order(pdate){

this.http.delete('http://localhost:3200/carts/'+pdate).subscribe();


}  



}
