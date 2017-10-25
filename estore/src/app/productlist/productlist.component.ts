import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {


    
  }

  detailfn(name,image,price){
    
    this.router.navigate(['/productdetail',name,image,price]);
    

  }

}
