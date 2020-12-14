import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  product: any[] = [];
  productupdate = {
    price: parseFloat(''),
    stock: parseInt(''),
    storeAvailable: true,
    deliveryAvailable: true,
  }
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/products/1')
    .subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
      }
    )

   }

  ngOnInit(): void {
  }
  updateProduct(prod: NgForm){
    if(prod.value.storeAvailable === "true")
    {
      if(prod.value.deliveryAvailable === "true")
      {
        
        this.productupdate.price= prod.value.price
        this.productupdate.stock= prod.value.stock
        this.productupdate.storeAvailable= true
        this.productupdate.deliveryAvailable= true
        
        this.http.patch('http://localhost:8080/products/1',this.productupdate)
        .subscribe((data: any) => {
          this.productupdate = data;
          console.log(this.productupdate);
        })
      }
      else{
        this.productupdate.price= prod.value.price
        this.productupdate.stock= prod.value.stock
        this.productupdate.storeAvailable= true
        this.productupdate.deliveryAvailable= false
        
        this.http.patch('http://localhost:8080/products/1',this.productupdate)
        .subscribe((data: any) => {
          this.productupdate = data;
          console.log(this.productupdate);
        })
      }
    }
    else
    {
      if(prod.value.deliveryAvailable === "true")
      {
        this.productupdate.price= prod.value.price
        this.productupdate.stock= prod.value.stock
        this.productupdate.storeAvailable= false
        this.productupdate.deliveryAvailable= true
        
        this.http.patch('http://localhost:8080/products/1',this.productupdate)
        .subscribe((data: any) => {
          this.productupdate = data;
          console.log(this.productupdate);
        })
      }
      else{
        this.productupdate.price= prod.value.price
        this.productupdate.stock= prod.value.stock
        this.productupdate.storeAvailable= false
        this.productupdate.deliveryAvailable= false
        
        
        this.http.patch('http://localhost:8080/products/1',this.productupdate)
        .subscribe((data: any) => {
          this.productupdate = data;
          console.log(this.productupdate);
        })
      }
    }
  }

}
