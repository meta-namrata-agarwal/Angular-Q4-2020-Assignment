import { Component, OnInit } from '@angular/core';
import { Address } from '../../models/address.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  isEdit: boolean = false;

  constructor() { }

  ngOnInit() {

    this.name = 'John Doe';
    this.email = 'test@test.com';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.hello = 'hello';
  
  }

  onClick() {
    this.name = 'Brad Traversy';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}
