import { TestBed } from '@angular/core/testing';

import { SortingServiceService } from './sorting-service.service';

describe('SortingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortingServiceService = TestBed.get(SortingServiceService);
    expect(service).toBeTruthy();
  });
});
