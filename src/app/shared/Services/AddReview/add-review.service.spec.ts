import { TestBed } from '@angular/core/testing';
import { Movies } from '../../Data/movies';

import { AddReviewService } from './add-review.service';

describe('AddReviewService', () => {
  let service: AddReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[Movies]
    });
    service = TestBed.inject(AddReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
