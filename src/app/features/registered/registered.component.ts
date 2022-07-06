import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/Models/movie.interface';
import { AddMoviesToUserService } from 'src/app/shared/Services/AddMoviesToUser/add-movies-to-user.service';
import { CommonService } from 'src/app/shared/Services/Common/common.service';
import { GetAllContentService } from 'src/app/shared/Services/GetAllContent/get-all-content.service';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss']
})
export class RegisteredComponent implements OnInit {

  ContentList: Movie[]=[];
  userName: string = '';
  userId: Number = -1;
  isUserAdmin: boolean = false;
  
  constructor(private readonly getAllContentService:GetAllContentService,
    private readonly addMoviesToUserService:AddMoviesToUserService,
    private readonly commonService:CommonService,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshContentList();
    this.getUserName();
    this.getUserId();
    this.commonService.getIsUserAdmin().subscribe((res) => {
      this.isUserAdmin = res;
    });
  }

  refreshContentList(){
    this.getAllContentService.getAllContent().subscribe((response) => {
      this.ContentList = response;
    });
  }

  onContentClick(movieId: Number){
    this.addMoviesToUserService.addWatched(this.userId, movieId);
    this.commonService.setCurrentContentId(movieId);
    this.router.navigateByUrl('registered/moviedetail')
  }

  getUserName(){
    this.commonService.getUserName().subscribe((response) => {
      this.userName = response;
    });
  }

  getUserId(){
    this.commonService.getUserId().subscribe((response) => {
      this.userId = response;
    });
  }
}
