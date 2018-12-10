import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Page components.
import { MainComponent } from './main/main.component';
import { StylesComponent } from './styles/styles.component';
import { TeamsComponent } from './teams/teams.component';
import { EventsComponent } from './events/events.component';
import { MusicComponent } from './music/music.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StoreComponent } from './store/store.component';
import { ArticlesComponent } from './articles/articles.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'styles', component: StylesComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'music', component: MusicComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'store', component: StoreComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
