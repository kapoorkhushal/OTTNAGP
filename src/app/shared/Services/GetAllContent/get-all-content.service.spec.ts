import { TestBed } from '@angular/core/testing';

import { GetAllContentService } from './get-all-content.service';

describe('GetAllContentService', () => {
  let service: GetAllContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
