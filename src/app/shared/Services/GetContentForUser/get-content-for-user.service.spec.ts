import { TestBed } from '@angular/core/testing';
import { Movies } from '../../Data/movies';
import { Users } from '../../Data/users';

import { GetContentForUserService } from './get-content-for-user.service';

describe('GetContentForUserService', () => {
  let service: GetContentForUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[Users, Movies]
    });
    service = TestBed.inject(GetContentForUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
