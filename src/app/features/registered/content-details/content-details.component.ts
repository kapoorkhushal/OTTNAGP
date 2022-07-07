import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/Models/movie.interface';
import { AddMoviesToUserService } from 'src/app/shared/Services/AddMoviesToUser/add-movies-to-user.service';
import { AddReviewService } from 'src/app/shared/Services/AddReview/add-review.service';
import { CommonService } from 'src/app/shared/Services/Common/common.service';
import { GetContentDetailsService } from 'src/app/shared/Services/GetContentDetails/get-content-details.service';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {

  content: Movie = {
    Id: 0,
    Name: "",
    Description: ""
  };
  contentId: Number = -1;
  userId: Number = -1;
  isUserAdmin: boolean = false;
  review: string = "";
  errorMessage:string="";
  isErrored:boolean=false;

    constructor(private readonly commonService:CommonService,
      private readonly getContentDetails: GetContentDetailsService,
      private readonly addMoviesToUserService: AddMoviesToUserService,
      private readonly addReviewService: AddReviewService) { }

  ngOnInit(): void {
    this.commonService.getUserId().subscribe((res) => {
      this.userId = res;
    });

    this.commonService.getCurrentContentId().subscribe((res) => {
      this.contentId = res;
    });

    this.getContentDetails.getContentDetails(this.contentId).subscribe((res) => {
      this.content = res;
    });

    this.commonService.getIsUserAdmin().subscribe((res) => {
      this.isUserAdmin = res;
    });
  }

  addToFavourites(){
    this.addMoviesToUserService.addFavourites(this.userId, this.contentId).subscribe((response) => {
      if(response !== -1){
        this.errorMessage="Movie Added Successfully!";
      this.isErrored=true;
      }
      else{
        this.errorMessage="Movie already exist!";
      this.isErrored=true;
      }
    });
  }

  addToWatchLater(){
    this.addMoviesToUserService.addWatchLater(this.userId, this.contentId).subscribe((response) => {
      if(response !== -1){
        this.errorMessage="Movie Added Successfully!";
        this.isErrored=true;
      }
      else{
        this.errorMessage="Movie already exist!";
      this.isErrored=true;
      }
    });
  }

  addReview(){
    this.addReviewService.addReview(this.contentId, this.review);
    this.review = "";
  }

  getGenre(input?: Number): string{
    switch(input){
      case 1: return "action";
      case 2: return "comedy";
      case 3: return "scifi";
      case 4: return "romance";
      case 5: return "horror";
    }
    return "";
  }

}
