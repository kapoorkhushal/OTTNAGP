import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { AddContentService } from './Services/AddContent/add-content.service';
import { AddMoviesToUserService } from './Services/AddMoviesToUser/add-movies-to-user.service';
import { AddUserService } from './Services/AddUser/add-user.service';
import { GetAllContentService } from './Services/GetAllContent/get-all-content.service';
import { GetContentDetailsService } from './Services/GetContentDetails/get-content-details.service';
import { GetContentForUserService } from './Services/GetContentForUser/get-content-for-user.service';
import { LoginService } from './Services/Login/login.service';
import { CommonService } from './Services/Common/common.service';
import { AddReviewService } from './Services/AddReview/add-review.service';
import { Movies } from './Data/movies';
import { AppRoutingModule } from '../app-routing.module';
import { Users } from './Data/users';



@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    AddContentService,
    AddMoviesToUserService,
    AddReviewService,
    AddUserService,
    GetAllContentService,
    GetContentDetailsService,
    GetContentForUserService,
    LoginService,
    CommonService,
    Movies,
    Users
  ],
  exports: [
    NavbarComponent,
    CardComponent
  ]
})
export class SharedModule { }
