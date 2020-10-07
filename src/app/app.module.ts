import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { UserService } from './services/user.service';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';

const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
