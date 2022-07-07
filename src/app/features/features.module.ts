import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteredComponent } from './registered/registered.component';
import { UnregisteredComponent } from './unregistered/unregistered.component';
import { LoginComponent } from './unregistered/login/login.component';
import { SignupComponent } from './unregistered/signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { FavouritesComponent } from './registered/favourites/favourites.component';
import { WatchLaterComponent } from './registered/watch-later/watch-later.component';
import { WatchedComponent } from './registered/watched/watched.component';
import { ContentDetailsComponent } from './registered/content-details/content-details.component';
import { AddContentComponent } from './admin/add-content/add-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { GenreComponent } from './registered/genre/genre.component';



@NgModule({
  declarations: [
    RegisteredComponent,
    UnregisteredComponent,
    LoginComponent,
    SignupComponent,
    FavouritesComponent,
    WatchLaterComponent,
    WatchedComponent,
    ContentDetailsComponent,
    AddContentComponent,
    GenreComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [GenreComponent]
})
export class FeaturesModule { }
