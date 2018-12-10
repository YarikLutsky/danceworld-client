import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { StylesComponent } from './styles/styles.component';
import { TeamsComponent } from './teams/teams.component';
import { EventsComponent } from './events/events.component';
import { MusicComponent } from './music/music.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StoreComponent } from './store/store.component';
import { ArticlesComponent } from './articles/articles.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    NavbarComponent,
    MainComponent,
    StylesComponent,
    TeamsComponent,
    EventsComponent,
    MusicComponent,
    GalleryComponent,
    StoreComponent,
    ArticlesComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
