import { TestBed } from '@angular/core/testing';
import { Movies } from '../../Data/movies';

import { GetContentDetailsService } from './get-content-details.service';

describe('GetContentDetailsService', () => {
  let service: GetContentDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[Movies]
    });
    service = TestBed.inject(GetContentDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
