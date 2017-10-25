import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DbconnectService} from '../dbconnect.service';
import { AppService } from '../app.service';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  public name;
  public imageurl;
  public price;
  

  constructor(private route : ActivatedRoute,private router : Router, private getuser : AppService, private cart : DbconnectService ) { }

  ngOnInit() {


    this.name=this.route.snapshot.params['name'];
    this.imageurl=this.route.snapshot.params['imageurl'];
    this.price=this.route.snapshot.params['price'];

  }
  addcart(){
       
    var qty= (<HTMLInputElement>document.getElementById("qty")).value;
    var obj={uname:this.getuser.checkuser(), pname: this.name, pprice:this.price, pquantity:qty, purl:this.imageurl };
    console.log(obj);
    this.cart.addcartdb(obj);
    alert("Added to cart")
    this.router.navigate(['/productlist']);

    
     }


}
