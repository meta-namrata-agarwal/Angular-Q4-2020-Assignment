import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private userService: UserService) { }
  posts: Post[];

  ngOnInit(): void {
    this.userService.getPosts()
    .subscribe(posts => this.posts = posts.slice(1,15));
  }

}
