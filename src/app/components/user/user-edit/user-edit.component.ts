import { Component, OnInit, ɵConsole } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userUpdate = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    neighbourId: 0,
    street: '',
    number: '',
    reference: ''
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  editUser(edit: NgForm) {
    this.userUpdate.firstname = edit.value.firstname;
    this.userUpdate.lastname = edit.value.lastname;
    this.userUpdate.phone = edit.value.phone;
    this.userUpdate.email = edit.value.email;
    this.userUpdate.neighbourId = parseInt(edit.value.neighbour);
    this.userUpdate.street = edit.value.street;
    this.userUpdate.number = edit.value.number;
    this.userUpdate.reference = edit.value.reference;
    console.log(this.userUpdate)
    this.http.patch(' http://localhost:8080/users/edit/1',this.userUpdate)
    .subscribe((data: any) => {
      this.userUpdate = data;
      console.log(this.userUpdate);
    })
  }
}
