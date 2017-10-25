import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {DbconnectService} from '../dbconnect.service';
import { RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productcart',
  templateUrl: './productcart.component.html',
  styleUrls: ['./productcart.component.css']
})
export class ProductcartComponent implements OnInit {

  public user;
  cartdata: any[];
  public subtotal=0;
  public total=0;
  constructor(private service: AppService, private auth :DbconnectService,private router: Router) { }

ngOnInit() {
   
  this.auth.get_order().subscribe(data=>{this.cartdata=data;
  
  for(var i=0;i<this.cartdata.length;i++){
      this.subtotal= this.subtotal+(this.cartdata[i].pquantity*this.cartdata[i].pprice);
      
      } 

      this.total=Math.round(this.subtotal*1.18);
  });

  }

deletefxn(pdate){

this.auth.delete_order(pdate);
this.total=0;
this.subtotal=0;
this.ngOnInit();
 
}

checkout(){

  alert("Order Placed Sucessfully");
  this.router.navigate(['/productlist']);
   

}

}


  
  
  

