import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/shared/Models/genre.enum';
import { Movie } from 'src/app/shared/Models/movie.interface';
import { AddMoviesToUserService } from 'src/app/shared/Services/AddMoviesToUser/add-movies-to-user.service';
import { CommonService } from 'src/app/shared/Services/Common/common.service';
import { GetGenreContentService } from 'src/app/shared/Services/GetGenreContent/get-genre-content.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  @Input() static genreInput: string;
  ContentList:Movie[]=[];
  userId: Number = -1;
  isUserAdmin: boolean = false;
  genre: Genre = 0;

  constructor(private readonly getGenreContent: GetGenreContentService,
    private readonly addMoviesToUserService:AddMoviesToUserService,
    private router: Router,
    private readonly commonService:CommonService) { }

  ngOnInit(): void {

    this.genre = this.getGenreType(GenreComponent.genreInput);

    this.commonService.getUserId().subscribe((response) => {
      this.userId = response;
    });

    this.commonService.getIsUserAdmin().subscribe((res) => {
      this.isUserAdmin = res;
    });

    this.refreshList();


  }

  updateContent(): void {
    this.genre = this.getGenreType(GenreComponent.genreInput);
    this.refreshList();
  }

  refreshList(){
    this.getGenreContent.getGenreSpecificContent(this.genre).subscribe((res) => {
      this.ContentList = res;
    });
  }

  getGenreType(input: string){
    switch(input){
      case "Action": return Genre.action;
      case "Comedy": return Genre.comedy;
      case "Scifi": return Genre.scifi;
      case "Romance": return Genre.romance;
      case "Horror": return Genre.horror;
    }
    return 0;
  }

  onContentClick(movieId: Number){
    this.addMoviesToUserService.addWatched(this.userId, movieId);
    this.commonService.setCurrentContentId(movieId);
    this.router.navigateByUrl('registered/moviedetail');
  }

  getGenre(input?: Number): string{
    switch(input){
      case 1: return "Action";
      case 2: return "Comedy";
      case 3: return "Scifi";
      case 4: return "Romance";
      case 5: return "Horror";
    }
    return "";
  }
}
