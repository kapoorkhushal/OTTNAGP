import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenreComponent } from 'src/app/features/registered/genre/genre.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
    private genreComponent: GenreComponent) { }

  @Input() isUserSignedIn: boolean = false;
  @Input() isAdminUser: boolean = false;

  genres: string[]=["Action","Comedy","Scifi", "Romance", "Horror"];

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/']);
  }

  onGenreClick(genre:string){
    GenreComponent.genreInput = genre;
    this.genreComponent.updateContent();
  }

}
