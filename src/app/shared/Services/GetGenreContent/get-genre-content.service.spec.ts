import { TestBed } from '@angular/core/testing';
import { Movies } from '../../Data/movies';

import { GetGenreContentService } from './get-genre-content.service';

describe('GetGenreContentService', () => {
  let service: GetGenreContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[Movies]
    });
    service = TestBed.inject(GetGenreContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
