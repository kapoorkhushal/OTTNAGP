import { TestBed } from '@angular/core/testing';

import { AddMoviesToUserService } from './add-movies-to-user.service';

describe('AddMoviesToUserService', () => {
  let service: AddMoviesToUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMoviesToUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
