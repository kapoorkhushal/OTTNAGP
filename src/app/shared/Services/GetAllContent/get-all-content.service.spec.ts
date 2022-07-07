import { TestBed } from '@angular/core/testing';
import { Movies } from '../../Data/movies';

import { GetAllContentService } from './get-all-content.service';

describe('GetAllContentService', () => {
  let service: GetAllContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[Movies]
    });
    service = TestBed.inject(GetAllContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
