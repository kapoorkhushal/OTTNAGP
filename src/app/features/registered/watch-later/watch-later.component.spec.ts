import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Movies } from 'src/app/shared/Data/movies';
import { Users } from 'src/app/shared/Data/users';

import { WatchLaterComponent } from './watch-later.component';

describe('WatchLaterComponent', () => {
  let component: WatchLaterComponent;
  let fixture: ComponentFixture<WatchLaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchLaterComponent ],
      providers:[Movies, Users],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
