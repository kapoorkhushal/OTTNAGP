import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/Models/movie.interface';
import { CommonService } from 'src/app/shared/Services/Common/common.service';
import { GetContentForUserService } from 'src/app/shared/Services/GetContentForUser/get-content-for-user.service';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.scss']
})
export class WatchedComponent implements OnInit {

  ContentList?: Movie[]=[];
  userId: Number = -1;
  isUserAdmin: boolean = false;

  constructor(private readonly getContentForUserService:GetContentForUserService,
    private readonly commonService:CommonService,
    private router: Router) { }

  ngOnInit(): void {
    this.commonService.getUserId().subscribe((response) => {
      this.userId = response;
    });

    this.refreshContentList();

    this.commonService.getIsUserAdmin().subscribe((res) => {
      this.isUserAdmin = res;
    });
  }

  refreshContentList(){
    this.ContentList = this.getContentForUserService.getWatched(this.userId);
  }

  onContentClick(input: Number){
    this.commonService.setCurrentContentId(input);
    this.router.navigateByUrl('registered/moviedetail');
  }

}
