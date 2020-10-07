import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  hobbies: string[];
  isEdit: boolean = false;
  isAddHobby: boolean = false;
  users: User[];
  user: User;
  constructor(private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getUser();
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
  }
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  toggleAddHobby() {
    this.isAddHobby = !this.isAddHobby;
  }
}
