import { TestBed } from '@angular/core/testing';
import { Users } from '../../Data/users';

import { AddUserService } from './add-user.service';

describe('AddUserService', () => {
  let service: AddUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[Users]
    });
    service = TestBed.inject(AddUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
