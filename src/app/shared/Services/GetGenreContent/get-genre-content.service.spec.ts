import { TestBed } from '@angular/core/testing';

import { GetGenreContentService } from './get-genre-content.service';

describe('GetGenreContentService', () => {
  let service: GetGenreContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGenreContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
