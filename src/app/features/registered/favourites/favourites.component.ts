import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/Models/movie.interface';
import { AddMoviesToUserService } from 'src/app/shared/Services/AddMoviesToUser/add-movies-to-user.service';
import { CommonService } from 'src/app/shared/Services/Common/common.service';
import { GetContentForUserService } from 'src/app/shared/Services/GetContentForUser/get-content-for-user.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  ContentList?: Movie[]=[];
  userId: Number = -1;
  isUserAdmin: boolean = false;

  constructor(private readonly addMoviesToUserService:AddMoviesToUserService,
    private readonly getContentForUserService:GetContentForUserService,
    private readonly commonService:CommonService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUserId();
    this.refreshContentList();
    this.commonService.getIsUserAdmin().subscribe((res) => {
      this.isUserAdmin = res;
    });
  }

  refreshContentList(){
    this.ContentList = this.getContentForUserService.getFavourites(this.userId);
  }

  onContentClick(movieId: Number){
    this.addMoviesToUserService.addWatched(this.userId, movieId);
    this.commonService.setCurrentContentId(movieId);
    this.router.navigateByUrl('registered/moviedetail');
  }

  getUserId(){
    this.commonService.getUserId().subscribe((response) => {
      this.userId = response;
    });
  }

}
