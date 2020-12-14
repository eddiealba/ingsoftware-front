import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{ 
  
  product = {
    brandId: parseInt(''),
    productName: '',
    tagId: parseInt(''),
    detail: '',
    model: '',
    price: parseFloat(''),
    stock: parseInt(''),
    description: '',
    storeAvailable: true,
    deliveryAvailable: true,
    image: ''

  }
  constructor(private http:HttpClient) { 
    /*this.http.post('http://localhost:8080/products',this.product)
    .subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
      }
    )*/
   
  }
  

  ngOnInit(): void {
  }

  createProduct(prod: NgForm){
    if(prod.value.storeAvailable === "true")
    {
      if(prod.value.deliveryAvailable === "true")
      {
        this.product.image= prod.value.image
        this.product.brandId= prod.value.brand
        this.product.productName= prod.value.nameProduct
        this.product.tagId= prod.value.tag
        this.product.detail= prod.value.detail
        this.product.model= prod.value.model
        this.product.price= prod.value.price
        this.product.stock= prod.value.stock
        this.product.description= prod.value.description
        this.product.storeAvailable= true
        this.product.deliveryAvailable= true
        
        this.http.post('http://localhost:8080/products',this.product)
        .subscribe((data: any) => {
          this.product = data;
          console.log(this.product);
        })
      }
      else{
        this.product.image= prod.value.image
        this.product.brandId= prod.value.brand
        this.product.productName= prod.value.nameProduct
        this.product.tagId= prod.value.tag
        this.product.detail= prod.value.detail
        this.product.model= prod.value.model
        this.product.price= prod.value.price
        this.product.stock= prod.value.stock
        this.product.description= prod.value.description
        this.product.storeAvailable= true
        this.product.deliveryAvailable= false
        
        this.http.post('http://localhost:8080/products',this.product)
        .subscribe((data: any) => {
          this.product = data;
          console.log(this.product);
        })
      }
    }
    else
    {
      if(prod.value.deliveryAvailable === "true")
      {
        this.product.image= prod.value.image
        this.product.brandId= prod.value.brand
        this.product.productName= prod.value.nameProduct
        this.product.tagId= prod.value.tag
        this.product.detail= prod.value.detail
        this.product.model= prod.value.model
        this.product.price= prod.value.price
        this.product.stock= prod.value.stock
        this.product.description= prod.value.description
        this.product.storeAvailable= false
        this.product.deliveryAvailable= true
        
        this.http.post('http://localhost:8080/products',this.product)
        .subscribe((data: any) => {
          this.product = data;
          console.log(this.product);
        })
      }
      else{
        this.product.image= prod.value.image
        this.product.brandId= prod.value.brand
        this.product.productName= prod.value.nameProduct
        this.product.tagId= prod.value.tag
        this.product.detail= prod.value.detail
        this.product.model= prod.value.model
        this.product.price= prod.value.price
        this.product.stock= prod.value.stock
        this.product.description= prod.value.description
        this.product.storeAvailable= false
        this.product.deliveryAvailable= false
        
        this.http.post('http://localhost:8080/products',this.product)
        .subscribe((data: any) => {
          this.product = data;
          console.log(this.product);
        })
      }
    }
  }

}
