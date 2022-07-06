import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() isUserSignedIn: boolean = false;
  @Input() isAdminUser: boolean = false;


  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/']);
  }

}
