import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order: any[] = [];

  constructor(private http: HttpClient) {

    this.http.get('http://localhost:8080/users/1/orders')
    .subscribe((data: any) => {
      this.order = data;
      console.log(this.order);
      }
    )

   }

  ngOnInit(): void {
  }

}
