import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../models/posts.model';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http:HttpClient) {}

  getPosts():Observable<Post[]>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  getUsers():Observable<User[]>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
  getUser(id:number):Observable<User>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/'+id);
  }
}
