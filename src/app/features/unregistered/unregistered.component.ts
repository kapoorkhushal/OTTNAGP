import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/Models/movie.interface';
import { GetAllContentService } from 'src/app/shared/Services/GetAllContent/get-all-content.service';

@Component({
  selector: 'app-unregistered',
  templateUrl: './unregistered.component.html',
  styleUrls: ['./unregistered.component.scss']
})
export class UnregisteredComponent implements OnInit {

  ContentList: Movie[]=[];

  constructor(private readonly getAllContentService:GetAllContentService) { }

  ngOnInit(): void {
    this.refreshContentList();
  }

  refreshContentList(){
    this.getAllContentService.getAllContent().subscribe((response) => {
      this.ContentList = response;
    });
  }

}
