import { TestBed } from '@angular/core/testing';

import { GetContentDetailsService } from './get-content-details.service';

describe('GetContentDetailsService', () => {
  let service: GetContentDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetContentDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
