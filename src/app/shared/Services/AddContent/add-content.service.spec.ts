import { TestBed } from '@angular/core/testing';
import { Movies } from '../../Data/movies';

import { AddContentService } from './add-content.service';

describe('AddContentService', () => {
  let service: AddContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[Movies]
    });
    service = TestBed.inject(AddContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
