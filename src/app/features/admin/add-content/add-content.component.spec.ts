import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Movies } from 'src/app/shared/Data/movies';

import { AddContentComponent } from './add-content.component';

describe('AddContentComponent', () => {
  let component: AddContentComponent;
  let fixture: ComponentFixture<AddContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContentComponent ],
      providers:[FormBuilder, Movies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
