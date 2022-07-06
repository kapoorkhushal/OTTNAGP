import { TestBed } from '@angular/core/testing';

import { GetContentForUserService } from './get-content-for-user.service';

describe('GetContentForUserService', () => {
  let service: GetContentForUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetContentForUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
