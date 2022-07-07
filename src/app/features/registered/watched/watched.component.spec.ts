import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Movies } from 'src/app/shared/Data/movies';
import { Users } from 'src/app/shared/Data/users';
import { User } from 'src/app/shared/Models/user.interface';

import { WatchedComponent } from './watched.component';

describe('WatchedComponent', () => {
  let component: WatchedComponent;
  let fixture: ComponentFixture<WatchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchedComponent ],
      imports: [RouterTestingModule],
      providers:[Movies, Users]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
