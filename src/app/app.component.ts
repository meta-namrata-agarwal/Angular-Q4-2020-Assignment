import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Q4 2019 Angular Assignment';
  navLinks: any[];

  constructor() {
    this.navLinks = [
      {
        label: 'Dashboard',
        path: ''
      }, {
        label: 'User',
        path: 'users/1'
      }, {
        label: 'About',
        path: 'about'
      }, {
        label: 'Post',
        path: 'posts'
      }]
  }
  ngOnInit(): void {  }
}
