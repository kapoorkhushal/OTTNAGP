import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Movies } from 'src/app/shared/Data/movies';
import { Users } from 'src/app/shared/Data/users';

import { RegisteredComponent } from './registered.component';

describe('RegisteredComponent', () => {
  let component: RegisteredComponent;
  let fixture: ComponentFixture<RegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredComponent ],
      providers:[Movies, Users],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
