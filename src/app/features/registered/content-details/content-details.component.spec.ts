import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movies } from 'src/app/shared/Data/movies';
import { Users } from 'src/app/shared/Data/users';

import { ContentDetailsComponent } from './content-details.component';

describe('ContentDetailsComponent', () => {
  let component: ContentDetailsComponent;
  let fixture: ComponentFixture<ContentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDetailsComponent ],
      providers:[Movies, Users]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentDetailsComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
