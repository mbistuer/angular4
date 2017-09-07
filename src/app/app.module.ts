import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing'
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AdminModule} from './admin/admin.module'
import { AppComponent } from './app.component';
import {LikeComponent} from './components/like/like.component'
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { MyVideosComponent } from './components/my-videos/my-videos.component';
import { VideoComponent } from './components/video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserEditComponent,
    FavoritesComponent,
    AddVideoComponent,
    MyVideosComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AdminModule,
    InfiniteScrollModule

  ],
  providers: [
    appRoutingProviders
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
