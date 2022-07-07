import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContentComponent } from './features/admin/add-content/add-content.component';
import { ContentDetailsComponent } from './features/registered/content-details/content-details.component';
import { FavouritesComponent } from './features/registered/favourites/favourites.component';
import { GenreComponent } from './features/registered/genre/genre.component';
import { RegisteredComponent } from './features/registered/registered.component';
import { WatchLaterComponent } from './features/registered/watch-later/watch-later.component';
import { WatchedComponent } from './features/registered/watched/watched.component';
import { LoginComponent } from './features/unregistered/login/login.component';
import { SignupComponent } from './features/unregistered/signup/signup.component';
import { UnregisteredComponent } from './features/unregistered/unregistered.component';

const routes: Routes = [
  { path: 'registered', component: RegisteredComponent },
  { path: '', component: UnregisteredComponent },
  { path: 'registered/favourites', component: FavouritesComponent },
  { path: 'registered/watched', component: WatchedComponent },
  { path: 'registered/watchLater', component: WatchLaterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'admin/addmovie', component:AddContentComponent},
  {path:'registered/moviedetail', component:ContentDetailsComponent},
  {path:'registered/genre/:id', component:GenreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
