import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any[] = [];

  constructor(private http: HttpClient) { 

    

    this.http.get('http://localhost:8080/users/1')
      .subscribe((data: any) => {
        this.user = data;
        console.log(this.user);
        }
      ) 
   }
  
  ngOnInit(): void {
  }

}
