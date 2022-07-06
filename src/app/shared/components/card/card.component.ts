import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../Models/movie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie!: Movie;
  constructor() { }

  ngOnInit(): void {
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
